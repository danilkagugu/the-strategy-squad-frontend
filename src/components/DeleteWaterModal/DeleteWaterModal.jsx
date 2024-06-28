import { useDispatch } from "react-redux";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import css from "./DeleteWaterModal.module.css";
import { deleteWaterRecord } from "../../redux/water/operations";

const DeleteWaterModal = ({ modalIsOpen, onCloseModal, id }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteWaterRecord(id));
    onCloseModal();
  };

  return (
    <ModalWrapper modalIsOpen={modalIsOpen} onCloseModal={onCloseModal}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Delete Entry</h2>
        <p className={css.text}>Are you sure you want to delete the entry?</p>
        <div className={css.btnWrapper}>
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
          <button
            className={css.cancelButton}
            type="button"
            onClick={() => onCloseModal()}
          >
            <p className={css.cancelText}>Cancel</p>
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteWaterModal;
