import { useTranslation } from "react-i18next";
import { requestResetPassword } from "../../services/authApi";
import css from "./ResetPasswordForm.module.css";
import { useState } from "react";

const ResetPasswordForm = ({ onPasswordReset }) => {
  const { t } = useTranslation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const params = new URLSearchParams(location.search);
  const token = params.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert(t("password_dont_match"));
      return;
    }
    try {
      const response = await requestResetPassword({ token, password });

      console.log(response);

      if (response.status === 204) {
        onPasswordReset();
      } else {
        alert(t("failed_reset_password"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert(t("failed_reset_password"));
    }
  };

  return (
    <div className={css.resetFormWrap}>
      <form className={css.resetForm} onSubmit={handleSubmit}>
        <label className={css.label}>
          {t("new_password")}
          <input
            className={css.formInput}
            type="password"
            placeholder={t("enter_new_password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label className={css.label}>
          {t("confirm_password")}
          <input
            className={css.formInput}
            type="password"
            placeholder={t("confirm_new_password")}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button className={css.submitBtn} type="submit">
          {t("reset_password")}
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
