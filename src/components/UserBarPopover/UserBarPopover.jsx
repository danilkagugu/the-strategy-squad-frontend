import { useState } from "react";
import sprite from "../../assets/icons.svg";
import css from "./UserBarPopover.module.css";
import UserSettingsModal from "../UserSettingsModal/UserSettingsModal";
import LogOutModal from "../LogOutModal/LogOutModal";
import scrollController from "../../services/noScroll";

const UserBarPopover = ({ modalRef, modalIsOpen, closeModal, openModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
    scrollController.disabledScroll();
  };
  const onCloseModal = () => {
    setIsOpen(false);
    scrollController.enabledScroll();
  };

  return (
    <>
      {isOpen && (
        <UserSettingsModal
          onCloseModal={onCloseModal}
          isOpen={isOpen}
          modalRef={modalRef}
        />
      )}
      {!isOpen ? (
        <div className={css.barPopover}>
          <button className={css.btnBar} onClick={onOpenModal}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-settings`}></use>
            </svg>
            <p className={css.textBarPopover}>Setting</p>
          </button>
          <button className={css.btnBar} onClick={openModal}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-log-out`}></use>
            </svg>
            <p className={css.textBarPopover}>Log out</p>
          </button>
          {modalIsOpen && (
            <LogOutModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
          )}
        </div>
      ) : null}
    </>
  );
};

export default UserBarPopover;
