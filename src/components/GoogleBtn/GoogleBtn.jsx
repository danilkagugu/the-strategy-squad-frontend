import { BASE_URL } from "../../services/authApi";
import { FcGoogle } from "react-icons/fc";

import css from "./GoogleBtn.module.css";
import { useTranslation } from "react-i18next";

const GoogleBtn = ({ type }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={css.googleContiner}>
        <p className={css.chooseText}>{t("or")}</p>
        <a
          className={css.googleLink}
          href={`${BASE_URL}/api/auth/google`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={css.logoGoogleContainer}>
            <span className={css.logoGoogleWrapper}>
              <span className={css.logoGoogleWrappe2}>
                <FcGoogle className={css.googleIcon} />
              </span>
            </span>
          </span>
          <span className={css.textLogoGoogle}>
            {type} {t("sign_in_google")}
          </span>
        </a>
      </div>
    </>
  );
};

export default GoogleBtn;
