import { createSignal, Show } from "solid-js"
import LeftMenu from "./LeftMenu"
import ProjectsMenu from "./ProjectsMenu"
import RightMenu from "./RightMenu"

export default function Header() {
  const [menuOpen, setMenuOpen] = createSignal(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <>
      <nav class="flex text-white inset-x-0 top-0 z-50 items-center justify-between fixed">
        <LeftMenu />
        <RightMenu />
      </nav>
      <Show when={menuOpen()}>
        <ProjectsMenu />
      </Show>
    </>
  )
}
