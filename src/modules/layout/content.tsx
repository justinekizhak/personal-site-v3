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
      <div class="h-screen flex justify-center items-center">
        {props.children}
      </div>
      {props.footerComponent}
    </>
  );
}
