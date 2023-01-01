import { tw } from "twind";
import { TProjectDetails } from "../schema";

interface ProjectCardProps {
  data: TProjectDetails;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div class={tw("my-3 ")}>
      <h2>{props.data.name}</h2>
      <p>{props.data.content.description}</p>
    </div>
  );
}
