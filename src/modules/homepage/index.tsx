import Footer from "~/modules/footer";
import Header from "~/modules/header";
import ViewComponent from "./view";

const Homepage = () => {
  return (
    <>
      <Header.Component />
      <ViewComponent />
      <Footer.Component />
    </>
  );
};

const Module = {
  Component: Homepage,
};

export default Module;
