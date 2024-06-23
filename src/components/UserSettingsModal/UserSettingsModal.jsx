import UserSettingsForm from "../UserSettingsForm/UserSettingsForm";
import css from "./UserSettingsModal.module.css";
import sprite from "../../assets/icons.svg";

const UserSettingsModal = ({ onClose }) => {
  return (
    <div className={css.settingsModal}>
      <div className={css.headerSeatingsModal}>
        <h3 className={css.title}>Setting</h3>
        <button className={css.btnClouse} onClick={onClose}>
          <svg className={css.iconClose}>
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </button>
      </div>
      <UserSettingsForm />
    </div>
  );
};

export default UserSettingsModal;
