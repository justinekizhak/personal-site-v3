import { A } from "@solidjs/router"
import { For } from "solid-js"
import { projectsListData } from "~/hooks/fetchData"

export default function Menu() {
  const data = () => {
    const res = projectsListData()
    return res?.projectsList
  }

  return (
    <menu>
      Project List
      <For each={data()}>
        {(project) => <A href={project.slug}>{project.name}</A>}
      </For>
    </menu>
  )
}
