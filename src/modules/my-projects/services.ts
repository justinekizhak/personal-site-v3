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

  const res = await fetch(
    `${baseURL}/stories` +
      new URLSearchParams({
        version: "published",
        token: token,
        cv: cv + "",
        page: page + "",
        per_page: per_page + "",
      })
  );

  if (!res.ok) throw new Error(res.status + "");

  const data = await res.json();
  const rawData = data?.stories;
  const projects = projectListSchema.parse(rawData);
  const total = parseInt(res?.headers?.get("total") || "0");

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
  const res = await fetch(
    `${baseURL}/spaces/me` +
      new URLSearchParams({
        token,
      })
  );
  if (!res.ok) throw new Error(res.status + "");
  const data = await res.json();
  const _newCv = data?.space?.version;
  return _newCv;
};
