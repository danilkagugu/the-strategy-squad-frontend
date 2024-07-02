import { useState } from "react";
import Logo from "../Logo/Logo";
import ResetPasswordForm from "../ResetPasswordForm/ResetPasswordForm";
import css from "./ResetPassword.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
  const { t } = useTranslation();
  const [passwordReset, setPasswordReset] = useState();

  const handlePasswordReset = () => {
    setPasswordReset(true);
  };

  return (
    <div className={css.resetPasswordWrap}>
      <Logo />
      <div className={css.infoContainer}>
        {passwordReset ? (
          <div>
            <div className={css.infoWrap}>
              <h1 className={css.infoTitle}>{t("password_changed")}</h1>
              <p className={css.text}>{t("log_new_password")}</p>
            </div>

            <Link to="/signin" className={css.signInBtn}>
              {t("sign_in")}
            </Link>
          </div>
        ) : (
          <div>
            <div className={css.infoWrap}>
              <h1 className={css.infoTitle}>{t("reset_your_password")}</h1>
            </div>
            <ResetPasswordForm onPasswordReset={handlePasswordReset} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
