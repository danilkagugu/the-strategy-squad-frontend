import { useState } from "react";
import WaterModal from "./WaterModal";
import scrollController from "../../services/noScroll";

const title = "Add water";
const text = "Choose a value:";

const ExampleWaterModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    scrollController.disabledScroll();
  }

  function closeModal() {
    setIsOpen(false);
    scrollController.enabledScroll();
  }

  return (
    <div>
      <button onClick={openModal}>Open WaterModal</button>
      <WaterModal
        onCloseModal={closeModal}
        isOpen={isOpen}
        title={title}
        text={text}
      />
    </div>
  );
};

export default ExampleWaterModal;
