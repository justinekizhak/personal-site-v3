import { JSXElement } from "solid-js";

interface HeaderProps {
  contactMeComponent: JSXElement;
}

export default function Header(props: HeaderProps) {
  return (
    <nav class="flex justify-between items-center absolute inset-x-0">
      <div class="mx-4 my-2 flex">
        <div class="w-8 h-8">JK</div>
        <div>toggle music</div>
      </div>
      {props.contactMeComponent}
    </nav>
  );
}
