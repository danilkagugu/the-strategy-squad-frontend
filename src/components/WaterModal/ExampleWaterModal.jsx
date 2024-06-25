import { useState } from "react";
import WaterModal from "./WaterModal";
import scrollController from "../../services/noScroll";

const title = "Edit the entered amount of water";
const text = "Correct entered data:";

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
