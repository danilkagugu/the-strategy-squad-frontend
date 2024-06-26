import { CgClose } from "react-icons/cg";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import css from "./DeleteWaterModal.module.css"

const DeleteWaterModal = ({ modalIsOpen, onCloseModal, id }) => {

    const handleDelete = (id) => {
        console.log("Delete", id);
    }

    return (
        <ModalWrapper modalIsOpen={modalIsOpen} onCloseModal={onCloseModal}>
            <div className={css.wrapper}>
                <button className={css.closeButton} onClick={() => onCloseModal()}><CgClose className={css.icon} /></button>
                <h2 className={css.title}>Delete Entry</h2>
                <p className={css.text}>Are you sure you want to delete the entry?</p>
                <div className={css.btnWrapper}>
                    <button className={css.deleteButton} type="button" onClick={() => handleDelete(id)}>Delete</button>
                    <button className={css.cancelButton} type="button" onClick={() => onCloseModal()}>Cancel</button>
                </div>
            </div>
        </ModalWrapper>
    )
}

export default DeleteWaterModal;
