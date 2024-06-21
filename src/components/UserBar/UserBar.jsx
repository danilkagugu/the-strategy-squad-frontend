import UserBarPopover from "../UserBarPopover/UserBarPopover";
import avatar from "../../assets/customers/desktop-tablet/customers1-tab-desc.png";
import sprite from "../../assets/icons.svg";
import css from "./UserBar.module.css";
import { useState } from "react";
// import ClickOutSide from "../../helpers/ClickOutSide";

const UserBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleBarPopover = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={css.userBar}>
      <button className={css.btnUserBar} onClick={handleToggleBarPopover}>
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
        // <ClickOutSide onClickOutside={handleToggleBarPopover}>
        <UserBarPopover />
      ) : // </ClickOutSide>
      null}
    </div>
  );
};

export default UserBar;
