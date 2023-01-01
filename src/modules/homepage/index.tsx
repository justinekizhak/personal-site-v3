import DefaultLayout from "../layout";
import ContentComponent from "./content";

const Homepage = () => {
  return (
    <DefaultLayout.Component>
      <ContentComponent />
    </DefaultLayout.Component>
  );
};

const Module = {
  Component: Homepage,
  ContentComponent,
};

export default Module;