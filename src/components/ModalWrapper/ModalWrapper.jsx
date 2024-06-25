import Modal from "react-modal";
import css from "./ModalWrapper.module.css";
import { IoClose } from "react-icons/io5";

Modal.setAppElement("#root");

const ModalWrapper = ({
  children,
  modalIsOpen,
  onCloseModal,
  contentLabel,
  top = "50%",
  transform = "translate(-50%, -50%)",
}) => {
  const customStyles = {
    content: {
      top,
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform,
      padding: "0",
      borderRadius: "15px",
    },
    overlay: {
      backgroundColor: "rgba(47, 47, 47, 0.6)",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel={contentLabel}
    >
      <div className={css.modalContent}>
        <button className={css.closeBtn} type="button" onClick={onCloseModal}>
          <IoClose className={css.closeIcon} />
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWrapper;
