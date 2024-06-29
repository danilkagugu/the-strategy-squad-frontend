import { useSelector } from "react-redux";
import UserBar from "../UserBar/UserBar";
import css from "./UserPanel.module.css";
import { selectUserData } from "../../redux/auth/selectors";

const UserPanel = () => {
  const { name, avatarURL } = useSelector(selectUserData);
  // console.log("avatarURL: ", avatarURL);

  return (
    <div className={css.userPanel}>
      <h2 className={css.title}>
        Hello, <span className={css.userName}>{name}!</span>
      </h2>
      <UserBar name={name} avatarURL={avatarURL} />
    </div>
  );
};

export default UserPanel;
// avatarURL;
