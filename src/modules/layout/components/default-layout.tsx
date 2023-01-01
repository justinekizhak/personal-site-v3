import { JSXElement } from "solid-js";

interface DefaultLayoutProps {
  headerComponent: JSXElement;
  children?: JSXElement;
  footerComponent: JSXElement;
}

export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <>
      {props.headerComponent}
      <main class="h-screen flex justify-center items-center">
        {props.children}
      </main>
      {props.footerComponent}
    </>
  );
}
