import { ErrorBoundary } from "solid-js";
import DefaultLayout from "../layout";
import ProjectListError from "./components/error-box";
import ContentComponent, { routeData } from "./content";

const MyProjectsWrapper = () => {
  return (
    <DefaultLayout.Component>
      <ErrorBoundary fallback={(error) => <ProjectListError error={error} />}>
        <ContentComponent />
      </ErrorBoundary>
    </DefaultLayout.Component>
  );
};

const Module = {
  Component: MyProjectsWrapper,
  routeData,
};

export default Module;
