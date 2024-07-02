import { useState } from "react";
import Logo from "../Logo/Logo";
import ResetPasswordForm from "../ResetPasswordForm/ResetPasswordForm";
import css from "./ResetPassword.module.css";
import { Link } from "react-router-dom";

const ResetPassword = () => {
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
            <p>Password changed</p>
            <p>You can now log in with your new password</p>
            <Link to="/signin">
              <button className={css.signInBtn}>Sign In</button>
            </Link>
          </div>
        ) : (
          <div>
            <div className={css.infoWrap}>
              <h1 className={css.infoTitle}>Reset your password</h1>
            </div>
            <ResetPasswordForm onPasswordReset={handlePasswordReset} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
