import { CgClose } from "react-icons/cg";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import css from "./DeleteWaterModal.module.css";
import { useTranslation } from "react-i18next";

const DeleteWaterModal = ({ modalIsOpen, onCloseModal, id }) => {
  const { t } = useTranslation();
  const handleDelete = (id) => {
    console.log("Delete", id);
  };

  return (
    <ModalWrapper modalIsOpen={modalIsOpen} onCloseModal={onCloseModal}>
      <div className={css.wrapper}>
        <button className={css.closeButton} onClick={() => onCloseModal()}>
          <CgClose className={css.icon} />
        </button>
        <h2 className={css.title}>{t("delete_entry")} </h2>
        <p className={css.text}>{t("sure_delete")} </p>
        <div className={css.btnWrapper}>
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => handleDelete(id)}
          >
            {t("delete")}
          </button>
          <button
            className={css.cancelButton}
            type="button"
            onClick={() => onCloseModal()}
          >
            {t("cancel")}
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteWaterModal;
