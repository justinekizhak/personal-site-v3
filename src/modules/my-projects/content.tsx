import { createResource, For } from "solid-js";
import { tw } from "twind";
import ProjectCard from "./components/project-card";
import { fetchProjectsList, param } from "./services";

export default function MyProjectsPage() {
  const [projectsListData] = createResource(param, fetchProjectsList);

  return (
    <div class={tw("mx-6")}>
      <h1 class={tw("mb-3 mt-6 text-4xl")}>My Projects</h1>
      <div class={tw("mt-6")}>
        <For each={projectsListData()?.projectsList}>
          {(projectDetails) => {
            return <ProjectCard data={projectDetails} />;
          }}
        </For>
      </div>
    </div>
  );
}
