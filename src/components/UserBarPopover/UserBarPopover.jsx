import sprite from "../../assets/icons.svg";
import css from "./UserBarPopover.module.css";
const UserBarPopover = () => {
  return (
    <div className={css.barPopover}>
      <button className={css.btnBar}>
        <svg className={css.iconSettings}>
          <use href={`${sprite}#icon-settings`}></use>
        </svg>
        <p className={css.textBarPopover}>Setting</p>
      </button>
      <button className={css.btnBar}>
        <svg className={css.iconlogOut}>
          <use href={`${sprite}#icon-log-out`}></use>
        </svg>
        <p className={css.textBarPopover}>Log out</p>
      </button>
    </div>
  );
};

export default UserBarPopover;
