import { For } from "solid-js";
import { tw } from "twind";

const links = [
  {
    name: "Facebook",
  },
  {
    name: "Instagram",
  },
  {
    name: "Twitter",
  },
  {
    name: "Github",
  },
];

export default function ContactMeComponent() {
  return (
    <div class={tw("flex gap-4")}>
      <For each={links}>{(link) => <div>{link.name}</div>}</For>
    </div>
  );
}
