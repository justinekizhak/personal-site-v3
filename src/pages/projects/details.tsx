import { useParams } from "@solidjs/router"
import { projectsListData } from "../../hooks/fetchData"

export default function ProjectDetails() {
  const params = useParams()
  const data = () => {
    const slug = params["project-id"]
    const res = projectsListData()

    const fullSlug = `projects/${slug}`
    const data = res?.projectMap[fullSlug] || "NO DATA"
    return data
  }
  return (
    <div>
      Project details
      <div>{JSON.stringify(data())}</div>
    </div>
  )
}
