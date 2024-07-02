import UserBarPopover from "../UserBarPopover/UserBarPopover";
import sprite from "../../assets/icons.svg";
import css from "./UserBar.module.css";
import { useRef, useState } from "react";
import ClickOutSide from "../../helpers/ClickOutSide";
import LogOutModal from "../LogOutModal/LogOutModal";

const UserBar = ({ name, avatarURL }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogOut, setIsOpenLogOut] = useState(false);

  const buttonRef = useRef(null);
  const modalRef = useRef(null);
  const handleToggleBarPopover = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      (buttonRef.current && buttonRef.current.contains(event.target)) ||
      isOpenLogOut
    ) {
      return;
    }
    if (modalRef.current && modalRef.current.contains(event.target)) {
      return;
    }
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(false);
    setIsOpenLogOut(true);
  };

  const closeModal = () => {
    setIsOpenLogOut(false);
  };

  return (
    <div className={css.userBar}>
      <button
        ref={buttonRef}
        className={css.btnUserBar}
        onClick={handleToggleBarPopover}
      >
        <p className={css.userName}>{name}</p>
        <div className={css.imgUserBarWrapper}>
          <img src={avatarURL} alt="avatar" />
        </div>

        {isOpen ? (
          <svg className={css.iconDown}>
            <use href={`${sprite}#icon-cheveron-up`}></use>
          </svg>
        ) : (
          <svg className={css.iconDown}>
            <use href={`${sprite}#icon-cheveron-down`}></use>
          </svg>
        )}
      </button>
      {isOpen ? (
        <div className={css.fatherDiv}>
          <ClickOutSide onClickOutside={handleClickOutside}>
            <UserBarPopover
              modalRef={modalRef}
              closeModal={closeModal}
              openModal={openModal}
              closeSettings={setIsOpen}
            />
          </ClickOutSide>
        </div>
      ) : null}
      {isOpenLogOut && (
        <LogOutModal modalIsOpen={isOpenLogOut} closeModal={closeModal} />
      )}
    </div>
  );
};

export default UserBar;
