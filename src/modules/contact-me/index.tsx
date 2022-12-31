import ContentComponent from "./content";
import ModalComponent from "./modal";

const ContactMeWrapper = () => {
  return (
    <ModalComponent>
      <ContentComponent />
    </ModalComponent>
  );
};

const Module = {
  Component: ContactMeWrapper,
  ContentComponent,
};

export default Module;
