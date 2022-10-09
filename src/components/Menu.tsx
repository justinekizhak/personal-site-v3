import { projectsListData } from "~/hooks/fetchData"
import { A } from "@solidjs/router"
import { For } from "solid-js"

export default function Menu() {
  const data = () => {
    const res = projectsListData()
    return res?.projectsList
  }

  return (
    <div>
      Project List
      <For each={data()}>
        {(project) => <A href={project.slug}>{project.name}</A>}
      </For>
    </div>
  )
}
