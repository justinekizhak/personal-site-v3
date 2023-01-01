import axios from "axios";
import { createSignal } from "solid-js";
import { projectListSchema, TProjectDetails } from "./schema";

const baseUrl = "https://api.storyblok.com/v1/cdn";
const token = "QcidRr0B5ytSNhz7RCptbAtt";

// Global params
export const [getPageNumber, setPageNumber] = createSignal(0);
export const [getPerPage, setPerPage] = createSignal(50);
export const [getCV, setCV] = createSignal("");

export const param = () => {
  return { pageNumber: getPageNumber(), perPage: getPerPage() };
};

interface IFetchProject {
  cv?: string;
  pageNumber?: number;
  perPage?: number;
}

export const fetchProjectsList = async (params?: IFetchProject) => {
  const cv = params?.cv ?? (await getVersion());
  const res = await axios.get(`${baseUrl}/stories`, {
    params: {
      version: "published",
      token,
      cv,
      page: params?.pageNumber,
      per_page: params?.perPage,
    },
  });

  const rawData = res?.data?.stories;
  const projects = projectListSchema.parse(rawData);
  const total = parseInt(res?.headers?.total || "0");

  const projectMap: {
    [key: string]: TProjectDetails;
  } = {};

  projects.forEach((project) => {
    const fullPath = project["full_slug"];
    projectMap[fullPath] = project;
  });

  return {
    projectMap,
    projectsList: projects,
    total,
  };
};

const getVersion = async (): Promise<string | undefined> => {
  const res = await axios.get(`${baseUrl}/spaces/me`, {
    params: {
      token,
    },
  });
  const _newCv = res?.data?.space?.version;
  setCV(_newCv);
  return _newCv;
};
