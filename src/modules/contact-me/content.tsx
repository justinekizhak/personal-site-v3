import { For } from "solid-js";

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
    <div class="flex gap-4">
      <For each={links}>{(link) => <div>{link.name}</div>}</For>
    </div>
  );
}
