import { useState } from "react";
import WaterModal from "./WaterModal";

const title = "Add water";
const text = "Choose a value:";

const ExampleWaterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onCloseModal = () => setIsOpen(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open WaterModal</button>
      <WaterModal
        onCloseModal={onCloseModal}
        isOpen={isOpen}
        title={title}
        text={text}
      />
    </div>
  );
};

export default ExampleWaterModal;
