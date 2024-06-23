import { useState } from "react";
import sprite from "../../assets/icons.svg";
import css from "./UserBarPopover.module.css";
import UserSettingsModal from "../UserSettingsModal/UserSettingsModal";
const UserBarPopover = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <>
      <div className={css.barPopover}>
        <button className={css.btnBar} onClick={handleToggleModal}>
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
      {openModal ? (
        <div className={css.modalOverlay}>
          <UserSettingsModal onClose={handleToggleModal} />
        </div>
      ) : null}
    </>
  );
};

export default UserBarPopover;
