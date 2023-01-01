import { tw } from "twind";
import ContactMeModule from "./contact-me";

export interface HeaderPublicProps {
  absolute?: boolean;
}

export default function Header(props: HeaderPublicProps) {
  return (
    <nav
      class={tw({
        "flex justify-between items-center inset-x-0": true,
        absolute: props.absolute,
      })}
    >
      <div class={tw("mx-4 my-2 flex")}>
        <div class={tw("w-8 h-8")}>JK</div>
        <div>toggle music</div>
      </div>
      <ContactMeModule.Component />
    </nav>
  );
}
