import { createSignal, JSX, Show } from "solid-js";
import ContactMeModalButton from "./modal-button";

interface ContactMeModalProps {
  children: JSX.Element;
}

export default function ContactMeModal(props: ContactMeModalProps) {
  const [modalOpen, setModalOpen] = createSignal(false);

  const onModalButtonClick = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <Show when={modalOpen()}>{props.children}</Show>
      <ContactMeModalButton onClick={onModalButtonClick} />
    </>
  );
}
