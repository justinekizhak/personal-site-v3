import { AxiosRequestConfig } from "axios";
import { createSignal } from "solid-js";
import { projectListSchema, TProjectDetails } from "./schema";

const baseURL = "https://api.storyblok.com/v1/cdn";
const token = "QcidRr0B5ytSNhz7RCptbAtt";

// Global params
export const [getPageNumber, setPageNumber] = createSignal(0);
export const [getPerPage, setPerPage] = createSignal(50);
export const [getCV, setCV] = createSignal<string>();

interface IFetchProject {
  cv?: string;
  pageNumber?: number;
  perPage?: number;
}

export const fetchProjectsList = async (params?: IFetchProject) => {
  const cv = params?.cv ?? getCV() ?? (await getVersion());
  const page = params?.pageNumber ?? getPageNumber();
  const per_page = params?.perPage ?? getPerPage();

  setCV(cv);
  setPageNumber(page);
  setPerPage(per_page);

  const reqConfig: AxiosRequestConfig = {
    url: "/stories",
    baseURL,
    params: {
      version: "published",
      token,
      cv,
      page,
      per_page,
    },
  };

  // const res = await axios(reqConfig);
  const res: any = {};

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
  // const res = await axios.get(`${baseURL}/spaces/me`, {
  //   params: {
  //     token,
  //   },
  // });
  const res: any = {};
  const _newCv = res?.data?.space?.version;
  return _newCv;
};
