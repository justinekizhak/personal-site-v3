import { For } from "solid-js";
import { A, useLocation } from "solid-start";
import { tw } from "twind";

interface LinkObject {
  href: string;
  text: string;
}

const links: LinkObject[] = [
  {
    href: "/about-me",
    text: "About Me",
  },
  {
    href: "/my-projects",
    text: "My Projects",
  },
];

const backLink: LinkObject = {
  href: "/",
  text: "Back to Home",
};

export default function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkObject = (link: LinkObject): LinkObject => {
    const linkHref = link.href;
    if (linkHref === currentPath) {
      return backLink;
    }
    return link;
  };

  return (
    <footer class={tw("absolute bottom-0 flex justify-between inset-x-0")}>
      <For each={links}>
        {(link: LinkObject) => {
          const newLink = getLinkObject(link);
          return (
            <A href={newLink.href} class={tw("mx-4 my-2")}>
              {newLink.text}
            </A>
          );
        }}
      </For>
    </footer>
  );
}
