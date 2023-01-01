import ModalComponent from "./components/modal";
import ContentComponent from "./content";

const ContactMeWrapper = () => {
  return (
    <ModalComponent>
      <ContentComponent />
    </ModalComponent>
  );
};

const Module = {
  Component: ContactMeWrapper,
};

export default Module;
