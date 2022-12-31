import { JSXElement } from "solid-js";
import Footer from "~/modules/footer";
import Header from "~/modules/header";
import ContentComponent from "./content";

interface LayoutWrapperProps {
  children: JSXElement;
}

const LayoutWrapper = (props: LayoutWrapperProps) => {
  return (
    <ContentComponent
      headerComponent={Header.Component}
      footerComponent={Footer.Component}
      children={props.children}
    />
  );
};

const Module = {
  Component: LayoutWrapper,
  ContentComponent,
};

export default Module;
