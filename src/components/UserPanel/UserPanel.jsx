import { useSelector } from "react-redux";
import UserBar from "../UserBar/UserBar";
import css from "./UserPanel.module.css";
import { selectUserData } from "../../redux/auth/selectors";
import { useTranslation } from "react-i18next";

const UserPanel = () => {
  const { t } = useTranslation();
  const { avatarURL, name } = useSelector(selectUserData);

  return (
    <div className={css.userPanel}>
      <h2 className={css.title}>
        {t("message")}, <span className={css.userName}>{name}!</span>
      </h2>
      <UserBar name={name} avatarURL={avatarURL} />
    </div>
  );
};

export default UserPanel;