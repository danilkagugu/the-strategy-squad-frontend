import { useState } from "react";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onCloseModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <ModalWrapper
        modalIsOpen={isOpen}
        onCloseModal={onCloseModal}
        top="12%"
        transform="translate(-50%, 0)"
      >
        <div>Here will be the content</div>
      </ModalWrapper>
    </div>
  );
};

export default ModalExample;
