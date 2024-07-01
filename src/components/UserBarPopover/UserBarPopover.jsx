import { useEffect, useState } from "react";
import sprite from "../../assets/icons.svg";
import css from "./UserBarPopover.module.css";
import UserSettingsModal from "../UserSettingsModal/UserSettingsModal";
import { useTranslation } from "react-i18next";

const UserBarPopover = ({ modalRef, openModal, closeSetings }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
    document.body.classList.add("noScroll");
  };
  const onCloseModal = () => {
    setIsOpen(false);
    document.body.classList.remove("noScroll");
  };
  useEffect(() => {
    return onCloseModal;
  }, []);

  return (
    <>
      {isOpen && (
        <UserSettingsModal
          onCloseModal={onCloseModal}
          isOpen={isOpen}
          modalRef={modalRef}
          closeSetings={closeSetings}
        />
      )}
      {!isOpen ? (
        <div className={css.barPopover}>
          <button className={css.btnBar} onClick={onOpenModal}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-settings`}></use>
            </svg>
            <p className={css.textBarPopover}>{t("setting")}</p>
          </button>
          <button className={css.btnBar} onClick={openModal}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-log-out`}></use>
            </svg>
            <p className={css.textBarPopover}>{t("log_out")}</p>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default UserBarPopover;
