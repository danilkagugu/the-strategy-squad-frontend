import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import css from "./WelcomeSection.module.css";
import { useTranslation } from "react-i18next";

const WelcomeSection = () => {
  const { t } = useTranslation();
  return (
    <div className={css.welcomeWrapper}>
      <Logo />
      <div className={css.mainInfo}>
        <p className={css.text}>{t("record_daily_water")}</p>
        <h1 className={css.title}>{t("water_consuption")}</h1>
        <div>
          <ul className={css.linkList}>
            <li>
              <Link to={"/signup"} className={css.tryTrackerBtn}>
                {t("try_tracker")}
              </Link>
            </li>
            <li>
              <Link to={"/signin"} className={css.signInBtn}>
                {t("sign_in")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
