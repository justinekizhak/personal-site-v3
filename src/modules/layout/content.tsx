import { JSXElement } from "solid-js";
import { tw } from "twind";
import Footer from "./components/footer";
import HeaderModule from "./header";

interface DefaultLayoutProps {
  centerContent?: boolean;
  children?: JSXElement;
}

export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <>
      <HeaderModule.Component absolute={props.centerContent} />
      <main
        class={tw({
          "h-screen flex justify-center items-center": props.centerContent,
          "px-6": true,
        })}
      >
        {props.children}
      </main>
      <Footer />
    </>
  );
}
