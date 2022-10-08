import axios from "axios"
import { createResource, createSignal } from "solid-js"
import validate from "validate.js"

const baseUrl = "https://api.storyblok.com/v1/cdn"
const token = "QcidRr0B5ytSNhz7RCptbAtt"

// Global params
export const [getPageNumber, setPageNumber] = createSignal(0)
export const [getPerPage, setPerPage] = createSignal(50)
export const [getCV, setCV] = createSignal("")

const param = () => {
  return { pageNumber: getPageNumber(), perPage: getPerPage() }
}

// Validation functions
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
// ----------------------------------------------------------------
interface IFetchProject {
  cv?: string
  pageNumber?: number
  perPage?: number
}

interface IProjectDetails {
  title: string
  domain: string
  summary: string
  description: string
  full_slug: string
}

const fetchProjectsList = async (params?: IFetchProject) => {
  const cv = params?.cv ?? (await getVersion())
  const res = await axios.get(`${baseUrl}/stories`, {
    params: {
      version: "published",
      token,
      cv,
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

const getVersion = async (): Promise<string | undefined> => {
  const res = await axios.get(`${baseUrl}/spaces/me`, {
    params: {
      token,
    },
  })
  const _newCv = res?.data?.space?.version
  setCV(_newCv)
  return _newCv
}

export const [projectsListData, fetchProjectsOptions] = createResource(
  param,
  fetchProjectsList
)
