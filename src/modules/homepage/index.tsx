import DefaultLayoutModule from "../layout";
import ContentComponent from "./content";

const Homepage = () => {
  return (
    <DefaultLayoutModule.Component>
      <ContentComponent />
    </DefaultLayoutModule.Component>
  );
};

const Module = {
  Component: Homepage,
};

export default Module;
