import { projectsListData } from "../../hooks/fetchData"

export default function ProjectList() {
  const data = () => {
    const res = projectsListData()
    console.log(res)
    const list = res?.projectsList.map((project) => {
      return {
        fullSlug: project.full_slug,
        name: project.name,
      }
    })
    return list
  }

  return (
    <div>
      Project List
      <div>{JSON.stringify(data())}</div>
    </div>
  )
}
