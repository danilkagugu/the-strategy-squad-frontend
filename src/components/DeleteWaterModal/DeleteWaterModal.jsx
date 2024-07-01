import { useDispatch } from "react-redux";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import css from "./DeleteWaterModal.module.css";
import { deleteWaterRecord } from "../../redux/water/operations";
import { useTranslation } from "react-i18next";

const DeleteWaterModal = ({ modalIsOpen, onCloseModal, id }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteWaterRecord(id));
    onCloseModal();
  };

  return (
    <ModalWrapper modalIsOpen={modalIsOpen} onCloseModal={onCloseModal}>
      <div className={css.wrapper}>
        <h2 className={css.title}>{t("delete_entry")}</h2>
        <p className={css.text}>{t("sure_delete")}?</p>
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
            <p className={css.cancelText}>{t("cancel")}</p>
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteWaterModal;
