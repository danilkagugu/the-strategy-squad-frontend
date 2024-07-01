import { useState } from "react";
// import { requestPasswordRecover } from "../../api"; // Предполагается, что путь к файлу с функцией запроса правильный
import css from "./PasswordRecoverForm.module.css";
import { requestPasswordRecover } from "../../services/authApi";

const PasswordRecoverForm = ({ onEmailSent }) => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Очистить сообщение об ошибке перед новым запросом

    try {
      await requestPasswordRecover(email);
      onEmailSent();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={css.recoverFormWrap}>
      <form className={css.recoverForm} onSubmit={handleSubmit}>
        <label className={css.label}>
          Email
          <input
            className={css.formInput}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errorMessage && <p className={css.error}>{errorMessage}</p>}
        <button className={css.submitBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordRecoverForm;
