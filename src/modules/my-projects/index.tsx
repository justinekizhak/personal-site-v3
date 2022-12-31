import DefaultLayout from "../layout";
import ContentComponent from "./content";

const MyProjectsWrapper = () => {
  return (
    <DefaultLayout.Component>
      <ContentComponent />
    </DefaultLayout.Component>
  );
};

const Module = {
  Component: MyProjectsWrapper,
  ContentComponent,
};

export default Module;
