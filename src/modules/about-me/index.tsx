import DefaultLayoutModule from "../layout";
import ContentComponent from "./content";

const AboutMeWrapper = () => {
  return (
    <DefaultLayoutModule.Component>
      <ContentComponent />
    </DefaultLayoutModule.Component>
  );
};

const Module = {
  Component: AboutMeWrapper,
};

export default Module;
