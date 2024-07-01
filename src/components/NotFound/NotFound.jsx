import { NavLink } from "react-router-dom";
import css from "./NotFound.module.css";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className={css.box}>
      <p className={css.whoops}>{t("whoops")}!</p>
      <p className={css.pageNotFound}>{t("page_not_found")}</p>

      <NavLink to="/" className={css.btnHome}>
        {t("home")}
      </NavLink>
    </div>
  );
};

export default NotFound;
