import { JSXElement } from "solid-js";
import DefaultLayoutComponent, { DefaultLayoutPublicProps } from "./content";

interface LayoutWrapperProps extends DefaultLayoutPublicProps {
  children: JSXElement;
}

const LayoutWrapper = (props: LayoutWrapperProps) => {
  return (
    <DefaultLayoutComponent
      centerContent={props.centerContent}
      children={props.children}
    />
  );
};

const Module = {
  Component: LayoutWrapper,
};

export default Module;
