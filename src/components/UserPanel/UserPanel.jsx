import { useSelector } from "react-redux";
import UserBar from "../UserBar/UserBar";
import css from "./UserPanel.module.css";
import { selectUserData } from "../../redux/auth/selectors";

const UserPanel = () => {
  const user = useSelector(selectUserData);
  // console.log("avatarURL: ", avatarURL);

  return (
    <div className={css.userPanel}>
      <h2 className={css.title}>
        Hello, <span className={css.userName}>{user?.name}!</span>
      </h2>
      <UserBar name={name} avatarURL={user?.avatarURL} />
    </div>
  );
};

export default UserPanel;
// avatarURL;
