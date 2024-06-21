import Modal from "react-modal";

const ModalWrapper = ({ children, modalIsOpen, onCloseModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
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
    >
      {children}
    </Modal>
  );
};

export default ModalWrapper;
