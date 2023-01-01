import { JSXElement } from "solid-js";
import { tw } from "twind";
import Footer from "./components/footer";
import HeaderModule from "./header";

export interface DefaultLayoutPublicProps {
  centerContent?: boolean;
}

interface DefaultLayoutProps extends DefaultLayoutPublicProps {
  children?: JSXElement;
}

export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <>
      <HeaderModule.Component absolute={props.centerContent} />
      <main
        class={tw({
          "h-screen flex justify-center items-center": props.centerContent,
        })}
      >
        {props.children}
      </main>
      <Footer />
    </>
  );
}
