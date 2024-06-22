import WaterForm from "../WaterForm/WaterForm";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

import css from "./WaterModal.module.css";

const WaterModal = ({ isOpen, onCloseModal, title, text }) => {
  return (
    <>
      <ModalWrapper modalIsOpen={isOpen} onCloseModal={onCloseModal}>
        <h2 className={css.mainTitle}>{title}</h2>
        <h3 className={css.title}>{text}</h3>
        <WaterForm title={title} text={text} />
      </ModalWrapper>
    </>
  );
};

export default WaterModal;
