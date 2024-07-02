import { useState } from "react";
import Logo from "../Logo/Logo";
import PasswordRecoverForm from "../PasswordRecoverForm/PasswordRecoverForm";
import css from "./PasswordRecover.module.css";

const PasswordRecover = () =>
  // { onEmailSent }
  {
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
            <p>Instructions sent to your email</p>
          ) : (
            <div>
              <div className={css.infoWrap}>
                <h1 className={css.infoTitle}>Reset password</h1>
                <p className={css.infoText}>
                  Get the password recovery instructions sent to this email
                </p>
              </div>
              <PasswordRecoverForm onEmailSent={handleEmailSent} />
            </div>
          )}
        </div>
      </div>
    );
  };

export default PasswordRecover;
