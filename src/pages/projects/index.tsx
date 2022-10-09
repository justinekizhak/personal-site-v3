import { projectsListData } from "../../hooks/fetchData"
import { A } from "@solidjs/router"

export default function ProjectList() {
  const data = () => {
    const res = projectsListData()
    return res?.projectsList
  }

  const firstProject = () => {
    const d = data()
    if (!d) return { slug: "#", name: "" }
    return d[0]
  }

  const lastProject = () => {
    const d = data()
    if (!d) return { slug: "#", name: "" }
    const lastIndex = d.length - 1
    return d[lastIndex]
  }

  return (
    <div>
      Project List
      <A href={firstProject().slug}>{firstProject().name}</A>
      <A href={lastProject().slug}>{lastProject().name}</A>
    </div>
  )
}
