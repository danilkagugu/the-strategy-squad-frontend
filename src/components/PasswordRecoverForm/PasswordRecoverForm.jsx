import { useState } from "react";
// import { requestPasswordRecover } from "../../api"; // Предполагается, что путь к файлу с функцией запроса правильный
import css from "./PasswordRecoverForm.module.css";
import { requestPasswordRecover } from "../../services/authApi";
import { useTranslation } from "react-i18next";

const PasswordRecoverForm = ({ onEmailSent }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Очистить сообщение об ошибке перед новым запросом

    try {
      const mail = await requestPasswordRecover(email);
      if (mail) onEmailSent();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={css.recoverFormWrap}>
      <form className={css.recoverForm} onSubmit={handleSubmit}>
        <label className={css.label}>
          {t("email")}
          <input
            className={css.formInput}
            type="email"
            placeholder={t("placeholder.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errorMessage && <p className={css.error}>{errorMessage}</p>}
        <button className={css.submitBtn} type="submit">
          {t("submit")}
        </button>
      </form>
    </div>
  );
};

export default PasswordRecoverForm;
