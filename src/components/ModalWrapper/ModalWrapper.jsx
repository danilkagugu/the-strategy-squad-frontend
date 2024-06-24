import Modal from "react-modal";
import css from "./ModalWrapper.module.css";
import { IoClose } from "react-icons/io5";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
  overlay: {
    backgroundColor: "rgba(47, 47, 47, 0.6)",
  },
};

Modal.setAppElement("#root");

const ModalWrapper = ({
  children,
  modalIsOpen,
  onCloseModal,
  contentLabel,
}) => {
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
