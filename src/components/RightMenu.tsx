import { A } from "@solidjs/router"
import { For } from "solid-js"
import twitterIcon from "~/assets/twitter-icon.svg"

const rightMenuLinks = [
  {
    href: "#",
    icon: twitterIcon,
    name: "Facebook",
  },
  {
    href: "#",
    icon: twitterIcon,
    name: "Instagram",
  },
  {
    href: "#",
    icon: twitterIcon,
    name: "Twitter",
  },
]

export default function RightMenu() {
  return (
    <div class="flex flex-col ml-auto right-menu pr-6 top-0 right-0 absolute md:flex-row md:py-4 md:gap-4">
      <For each={rightMenuLinks}>
        {(link) => (
          <A
            href={link.href}
            class="bg-white rounded-full h-full my-4 w-8 inline-block md:my-0"
          >
            <img src={link.icon} alt={link.name} />
          </A>
        )}
      </For>
    </div>
  )
}
