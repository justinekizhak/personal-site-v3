import axios from "axios"
import { createResource } from "solid-js"
import validate from "validate.js"

const baseUrl = "https://api.storyblok.com/v1/cdn"
const token = "QcidRr0B5ytSNhz7RCptbAtt"

function createValidator(type: "string" | "url" = "string") {
  if (type === "string") {
    return {
      presence: true,
      type: "string",
    }
  }
  if (type === "url") {
    return {
      presence: true,
      url: true,
    }
  }
}

const constraints = {
  uuid: createValidator(),
  "content.title": createValidator(),
  "content.domain": createValidator(),
  "content.summary": createValidator(),
  "content.description": createValidator(),
}

function validationLogic(data: object) {
  const validation = validate(data, constraints)
  if (validation) {
    throw validation
  }
  return data
}

interface IFetchProject {
  cv?: number
  pageNumber?: number
  perPage?: number
}

export interface IProjectDetails {
  title: string
  domain: string
  summary: string
  description: string
  full_slug: string
}

const fetchProjectsList = async (params?: IFetchProject) => {
  const res = await axios.get(`${baseUrl}/stories`, {
    params: {
      version: "published",
      token,
      cv: await getVersion(),
      page: params?.pageNumber,
      per_page: params?.perPage,
    },
  })
  const projects: IProjectDetails[] = res?.data?.stories
  const total = parseInt(res?.headers?.total || "0")

  if (!validate.isArray(projects)) {
    throw new TypeError("Response is not an array")
  }

  for (const projectData of projects) {
    validationLogic(projectData)
  }

  const projectMap: {
    [key: string]: IProjectDetails
  } = {}

  projects.forEach((project) => {
    const fullPath = project["full_slug"]
    projectMap[fullPath] = project
  })

  return {
    projectMap,
    total,
  }
}

const getVersion = async () => {
  const res = await axios.get(`${baseUrl}/spaces/me`, {
    params: {
      token,
    },
  })
  return res?.data?.space?.version
}

export const [projectsListData, fetchProjectsOptions] = createResource(
  {},
  fetchProjectsList
)
