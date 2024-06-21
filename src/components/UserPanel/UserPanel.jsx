import UserBar from "../UserBar/UserBar";
import css from "./UserPanel.module.css";

const UserPanel = () => {
  return (
    <div className={css.userPanel}>
      <h2 className={css.title}>
        Hello, <span className={css.userName}>Nadia!</span>
      </h2>
      <UserBar />
    </div>
  );
};

export default UserPanel;
