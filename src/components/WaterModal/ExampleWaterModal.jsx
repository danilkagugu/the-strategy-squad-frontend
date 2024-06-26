import { useState } from "react";
import WaterModal from "./WaterModal";
import scrollController from "../../services/noScroll";
import { useDispatch } from "react-redux";
import { editWaterRecord } from "../../redux/water/operations";

import { currentDay } from "../../services/currentDay";

const title = "Edit the entered amount of water";
const text = "Correct entered data:";

const ExampleWaterModal = ({ id, amount, time }) => {
  const initialTime = time.slice(-5);

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
    scrollController.disabledScroll();
  }

  function closeModal() {
    setIsOpen(false);
    scrollController.enabledScroll();
  }

  const onSubmitData = (data, counter, time) => {
    const fullData = `${currentDay()}-${time}`;
    dispatch(editWaterRecord({ ...data, amount: counter, time: fullData, id }));
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Open WaterModal</button>
      <WaterModal
        onCloseModal={closeModal}
        isOpen={isOpen}
        title={title}
        text={text}
        onSubmitData={onSubmitData}
        initialState={{ time: initialTime, amount }}
      />
    </div>
  );
};

export default ExampleWaterModal;
