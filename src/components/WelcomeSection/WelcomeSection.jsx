import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import css from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <div className={css.welcomeWrapper}>
      <Logo />
      <div className={css.mainInfo}>
        <p className={css.text}>Record daily water intake and track</p>
        <h1 className={css.title}>Water consumption tracker</h1>
        <div>
          <ul className={css.linkList}>
            <li>
              <Link to={"/signup"} className={css.tryTrackerBtn}>
                Try tracker
              </Link>
            </li>
            <li>
              <Link to={"/signin"} className={css.signInBtn}>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
