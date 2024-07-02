import { useState } from "react";
import Logo from "../Logo/Logo";
import PasswordRecoverForm from "../PasswordRecoverForm/PasswordRecoverForm";
import css from "./PasswordRecover.module.css";
import { useTranslation } from "react-i18next";

const PasswordRecover = () =>
  // { onEmailSent }
  {
    const { t } = useTranslation();
    const [emailSent, setEmailSent] = useState(false);

    const handleEmailSent = () => {
      setEmailSent(true);
      // onEmailSent();
    };

    return (
      <div className={css.passwordRecoverWrap}>
        <Logo />

        <div className={css.infoContainer}>
          {emailSent ? (
            <p>{t("instructions_sent_email")}</p>
          ) : (
            <div>
              <div className={css.infoWrap}>
                <h1 className={css.infoTitle}>{t("reset_password")}</h1>
                <p className={css.infoText}>{t("get_password_recovery")}</p>
              </div>
              <PasswordRecoverForm onEmailSent={handleEmailSent} />
            </div>
          )}
        </div>
      </div>
    );
  };

export default PasswordRecover;
