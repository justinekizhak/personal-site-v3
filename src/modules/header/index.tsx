import ContactMe from "~/modules/contact-me";
import ContentComponent from "./content";

const HeaderWrapper = () => {
  return <ContentComponent contactMeComponent={ContactMe.Component} />;
};

const Module = {
  Component: HeaderWrapper,
  ContentComponent,
};

export default Module;
