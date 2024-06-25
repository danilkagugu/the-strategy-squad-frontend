import { useState } from "react";
import sprite from "../../assets/icons.svg";
import css from "./UserBarPopover.module.css";
// import ModalWrapper from '../ModalWrapper/ModalWrapper';
import UserSettingsModal from "../UserSettingsModal/UserSettingsModal";
const UserBarPopover = ({ modalRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => setIsOpen(true);
  const onCloseModal = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <UserSettingsModal
          onCloseModal={onCloseModal}
          isOpen={isOpen}
          modalRef={modalRef}
        />
      )}
      <div className={css.barPopover}>
        <button className={css.btnBar} onClick={onOpenModal}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-settings`}></use>
          </svg>
          <p className={css.textBarPopover}>Setting</p>
        </button>
        <button className={css.btnBar}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-log-out`}></use>
          </svg>
          <p className={css.textBarPopover}>Log out</p>
        </button>
      </div>
    </>
  );
};

export default UserBarPopover;
