import DefaultLayout from "../layout";
import ContentComponent from "./content";

const AboutMeWrapper = () => {
  return (
    <DefaultLayout.Component>
      <ContentComponent />
    </DefaultLayout.Component>
  );
};

const Module = {
  Component: AboutMeWrapper,
  ContentComponent,
};

export default Module;
