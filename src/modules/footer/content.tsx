import { A } from "solid-start";

export default function Footer() {
  return (
    <footer class="absolute bottom-0 flex justify-between inset-x-0">
      <A href="/about-me" class="mx-4 my-2">
        About Me
      </A>
      <A href="/my-projects" class="mx-4 my-2">
        My Projects
      </A>
    </footer>
  );
}
