import { tw } from "twind";

interface ContactMeModalButtonProps {
  onClick: () => void;
}

export default function ContactMeModalButton(props: ContactMeModalButtonProps) {
  return (
    <div class={tw("mx-4 my-2 flex")}>
      <button onClick={props.onClick}>say hi.</button>
    </div>
  );
}
