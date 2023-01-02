import { ErrorBoundary } from "solid-js";
import DefaultLayoutModule from "../layout";
import ProjectListError from "./components/error-box";
import ContentComponent from "./content";
import { routeData } from "./routeData";

const MyProjectsWrapper = () => {
  return (
    <DefaultLayoutModule.Component>
      <ErrorBoundary fallback={(error) => <ProjectListError error={error} />}>
        <ContentComponent />
      </ErrorBoundary>
    </DefaultLayoutModule.Component>
  );
};

const Module = {
  Component: MyProjectsWrapper,
  routeData,
};

export default Module;
