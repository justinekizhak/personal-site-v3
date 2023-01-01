import ContactMeModule from "./contact-me";
import ContentComponent from "./content";

const HeaderWrapper = () => {
  return <ContentComponent contactMeComponent={ContactMeModule.Component} />;
};

const Module = {
  Component: HeaderWrapper,
};

export default Module;
