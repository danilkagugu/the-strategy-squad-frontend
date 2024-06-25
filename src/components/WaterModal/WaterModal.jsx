import WaterForm from "../WaterForm/WaterForm";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

import css from "./WaterModal.module.css";

const onSubmitDataExam = (data, counter) =>
  console.log({ ...data, amount: counter });

const WaterModal = ({
  isOpen,
  onCloseModal,
  title = "Add water",
  text = "Choose a value:",
  onSubmitData = onSubmitDataExam,
  initialState,
}) => {
  return (
    <>
      <ModalWrapper modalIsOpen={isOpen} onCloseModal={onCloseModal}>
        <h2 className={css.mainTitle}>{title}</h2>
        <h3 className={css.title}>{text}</h3>
        <WaterForm onSubmitData={onSubmitData} initialState={initialState} />
      </ModalWrapper>
    </>
  );
};

export default WaterModal;
