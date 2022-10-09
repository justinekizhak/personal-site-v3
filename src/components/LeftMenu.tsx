import { A, useLocation } from "@solidjs/router"
import { createSignal, For, onMount, Show } from "solid-js"

const leftMenuLinks = [
  {
    name: "/ ________",
    href: "/",
  },
  {
    name: "/ my-projects.html",
    href: "/projects",
  },
  {
    name: "/ about-me.html",
    href: "/about-me",
  },
  {
    name: "/ contact-me.html",
    href: "/contact-me",
  },
]

export default function LeftMenu() {
  let logo: HTMLDivElement | undefined
  let menu: HTMLDivElement | undefined
  const [menuOpen, setMenuOpen] = createSignal(false)
  // const [currentPage, setCurrentPage] = createSignal("Home")

  const params = useLocation()

  const navLinks = () => {
    const path = params.pathname
    let name = ""
    const remaining: { name: string; href: string }[] = []
    leftMenuLinks.forEach((link) => {
      if (link.href === path) {
        name = link.name
      } else {
        remaining.push(link)
      }
    })
    return {
      current: {
        href: path,
        name,
      },
      remaining,
    }
  }

  const startHover = () => {
    setMenuOpen(true)
  }

  const endHover = () => {
    setMenuOpen(false)
  }

  onMount(() => {
    if (logo && menu) {
      menu.style.left = logo.offsetWidth + "px"
    }
  })
  return (
    <>
      <div
        ref={logo}
        class="font-mono h-16 tracking-wide pl-8 items-center hidden md:inline-flex"
      >
        justinekizhak
      </div>
      <div
        ref={menu}
        class="flex flex-col font-mono left-menu tracking-wide pr-4 pl-6 top-0 absolute md:pl-2"
        onMouseEnter={startHover}
        onMouseLeave={endHover}
      >
        <div class="cursor-pointer flex h-16 items-center">
          {navLinks().current.name}
        </div>
        <Show when={menuOpen()}>
          <div>
            <For each={navLinks().remaining}>
              {(link) => (
                <A
                  href={link.href}
                  class="flex h-16 text-white no-underline items-center hover:bg-dark-100"
                >
                  {link.name}
                </A>
              )}
            </For>
          </div>
        </Show>
      </div>
      <Show when={menuOpen()}>
        <div class="bg-black inset-0 -z-10 fixed" onClick={endHover}></div>
      </Show>
    </>
  )
}
