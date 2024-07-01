import css from "./ResetPasswordForm.module.css"
import { useState } from "react";

const ResetPasswordForm = ({ onPasswordReset }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/users/password/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
      });

      if (response.ok) {
        onPasswordReset();
      } else {
        alert("Failed to reset password. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className={css.resetFormWrap}>
      <form className={css.resetForm} onSubmit={handleSubmit}>
        <label className={css.label}>
          New Password
          <input
            className={css.formInput}
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label className={css.label}>
          Confirm Password
          <input
            className={css.formInput}
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button className={css.submitBtn} type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm