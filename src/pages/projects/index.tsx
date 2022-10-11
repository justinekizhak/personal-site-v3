import { A } from "@solidjs/router"
import { projectsListData } from "~/hooks/fetchData"

export default function ProjectList() {
  const data = () => {
    const res = projectsListData()
    return res?.projectsList
  }

  const firstProject = () => {
    const d = data()
    if (!d || d.length === 0) return { slug: "#", name: "" }
    return d[0]
  }

  const lastProject = () => {
    const d = data()
    if (!d || d.length === 0) return { slug: "#", name: "" }
    const lastIndex = d.length - 1
    return d[lastIndex]
  }

  return (
    <div class="flex h-full text-white project-list justify-center items-center">
      <h1>Project List</h1>
      <div class="flex bottom-10 gap-6 fixed">
        <A href={firstProject().slug} class="link">
          {firstProject().name}
        </A>
        <A href={lastProject().slug} class="link">
          {lastProject().name}
        </A>
      </div>
    </div>
  )
}
