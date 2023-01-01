import DefaultLayoutModule from "../layout";
import ContentComponent from "./content";

const Homepage = () => {
  return (
    <DefaultLayoutModule.Component centerContent={true}>
      <ContentComponent />
    </DefaultLayoutModule.Component>
  );
};

const Module = {
  Component: Homepage,
};

export default Module;
