import { useState } from "react";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onCloseModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <ModalWrapper modalIsOpen={isOpen} onCloseModal={onCloseModal}>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum totam
          aperiam, dolores molestias expedita nisi.
        </div>
        <button onClick={onCloseModal}>Close Modal</button>
      </ModalWrapper>
    </div>
  );
};

export default ModalExample;
