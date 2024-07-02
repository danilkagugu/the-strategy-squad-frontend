import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { requestResetPassword } from "../../services/authApi";
import css from "./ResetPasswordForm.module.css";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { toast } from "react-toastify";
// import { useState } from "react";

const UserPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Repeat Password is required"),
});

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
  repeatPassword: "",
};

const ResetPasswordForm = ({ onPasswordReset }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(UserPasswordSchema),
    defaultValues: INITIAL_FORM_DATA,
  });

  const params = new URLSearchParams(location.search);
  const token = params.get("token");

  const onSubmit = async (data) => {
    try {
      const response = await requestResetPassword({
        token,
        password: data.password,
      });

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
      <form className={css.resetForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={css.label}>
          {t("new_password")}
          <input
            className={`${css.formInput} ${
              errors.password && touchedFields.password
                ? css.formInputError
                : touchedFields.password
                ? css.formInputValid
                : ""
            }`}
            type={"password"}
            {...register("password")}
            placeholder={t("enter_new_password")}
          />

          {errors.password && touchedFields.password ? (
            <div className={css.errorMsg}>{errors.password.message}</div>
          ) : null}
        </label>
        <label className={css.label}>
          {t("confirm_password")}
          <input
            className={`${css.formInput} ${
              errors.repeatPassword && touchedFields.repeatPassword
                ? css.formInputError
                : touchedFields.repeatPassword
                ? css.formInputValid
                : ""
            }`}
            type={"password"}
            {...register("repeatPassword")}
            placeholder={t("confirm_new_password")}
          />
          {errors.repeatPassword && touchedFields.repeatPassword ? (
            <div className={css.errorMsg}>{errors.repeatPassword.message}</div>
          ) : null}
        </label>
        <button className={css.submitBtn} type="submit">
          {t("reset_password")}
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
