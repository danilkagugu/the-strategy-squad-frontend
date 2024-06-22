import WaterForm from "../WaterForm/WaterForm";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const WaterModal = ({ isOpen, onCloseModal, title, text }) => {
  return (
    <div>
      <ModalWrapper modalIsOpen={isOpen} onCloseModal={onCloseModal}>
        <WaterForm title={title} text={text} />
      </ModalWrapper>
    </div>
  );
};

export default WaterModal;
