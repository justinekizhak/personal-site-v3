import { For } from "solid-js";
import { createRouteData, useRouteData } from "solid-start";
import { tw } from "twind";
import ProjectCard from "./components/project-card";
import { fetchProjectsList } from "./services";

export const routeData = () => {
  const data = createRouteData(async () => {
    return await fetchProjectsList();
  });
  return data;
};

export default function MyProjectsPage() {
  const routeDataResponse = useRouteData<typeof routeData>();

  return (
    <div class={tw("mx-6")}>
      <h1 class={tw("mb-3 mt-6 text-4xl")}>My Projects</h1>
      <div class={tw("mt-6")}>
        <For each={routeDataResponse()?.projectsList}>
          {(projectDetails) => {
            return <ProjectCard data={projectDetails} />;
          }}
        </For>
      </div>
    </div>
  );
}
