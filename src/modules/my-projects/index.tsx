import { ErrorBoundary } from "solid-js";
import DefaultLayout from "../layout";
import ContentComponent, { routeData } from "./content";

const ProjectListError = ({ error }: { error: any }) => {
  return (
    <div>
      <h1>Something went wrong while fetching my projects list!</h1>
      <pre>{JSON.stringify(error)}</pre>
    </div>
  );
};

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
