import { useDispatch } from "react-redux";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { apiLogoutUser } from "../../redux/auth/operations";
import css from "./LogOutModal.module.css";
import { useTranslation } from "react-i18next";

const LogOutModal = ({ modalIsOpen, closeModal }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(apiLogoutUser());
  };

  return (
    <>
      <ModalWrapper modalIsOpen={modalIsOpen} onCloseModal={closeModal}>
        <div className={css.logOutModalWrapper}>
          <h2 className={css.logOutModalTitle}>{t("log_out")}</h2>
          <p className={css.logOutModalText}>{t("realy_log_out")}?</p>

          <div className={css.logOutModalBtnWrapper}>
            <button className={css.logOutBtn} onClick={onLogOut}>
              <p className={css.btnLogOutText}>{t("log_out")}</p>
            </button>

            <button className={css.closeBtn} onClick={closeModal}>
              <p className={css.btnCancelText}>{t("cancel")}</p>
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default LogOutModal;
