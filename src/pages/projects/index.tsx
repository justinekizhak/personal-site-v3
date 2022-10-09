import { projectsListData } from "../../hooks/fetchData"

export default function ProjectList() {
  const data = () => {
    const res = projectsListData()
    return res?.projectsList
  }

  return (
    <div>
      Project List
      <div>{JSON.stringify(data())}</div>
    </div>
  )
}
