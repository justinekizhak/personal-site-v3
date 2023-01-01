import { JSXElement } from "solid-js";
import DefaultLayoutComponent from "./components/default-layout";
import Footer from "./components/footer";
import HeaderModule from "./header";

interface LayoutWrapperProps {
  children: JSXElement;
}

const LayoutWrapper = (props: LayoutWrapperProps) => {
  return (
    <DefaultLayoutComponent
      headerComponent={HeaderModule.Component}
      footerComponent={Footer}
      children={props.children}
    />
  );
};

const Module = {
  Component: LayoutWrapper,
};

export default Module;
