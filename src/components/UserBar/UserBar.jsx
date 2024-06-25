import UserBarPopover from "../UserBarPopover/UserBarPopover";
import avatar from "../../assets/customers/desktop-tablet/customers1-tab-desc.png";
import sprite from "../../assets/icons.svg";
import css from "./UserBar.module.css";
import { useRef, useState } from "react";
import ClickOutSide from "../../helpers/ClickOutSide";

const UserBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogOut, setIsOpenLogOut] = useState(false);
  const buttonRef = useRef(null);
  const modalRef = useRef(null);
  const handleToggleBarPopover = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if ((buttonRef.current && buttonRef.current.contains(event.target)) || isOpenLogOut) {
      return;
    }
    if (modalRef.current && modalRef.current.contains(event.target)) {
      return;
    }
    setIsOpen(false);
  };

  const openModal = () => {
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
        <p className={css.userName}>Nadia</p>
        <img src={avatar} />
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
        <ClickOutSide onClickOutside={handleClickOutside}>

          <UserBarPopover modalRef={modalRef} modalIsOpen={isOpenLogOut} closeModal={closeModal} openModal={openModal} />
        </ClickOutSide>
      ) : null}
    </div>
  );
};

export default UserBar;
