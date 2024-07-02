import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./PasswordRecoverForm.module.css";
import { requestPasswordRecover } from "../../services/authApi";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
// import { useState } from "react";

const UserEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email!")
    .required("Email is required"),
});

const INITIAL_FORM_DATA = {
  email: "",
};

const PasswordRecoverForm = ({ onEmailSent }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(UserEmailSchema),
    defaultValues: INITIAL_FORM_DATA,
  });
  // const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await requestPasswordRecover(data.email);
      onEmailSent();
    } catch (error) {
      console.log(error);
      // alert(error.message);
      toast.error("There is no acount with this email!");
    }
  };

  return (
    <div className={css.recoverFormWrap}>
      <form className={css.recoverForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={css.label}>
          {t("email")}
          <input
            className={`${css.formInput} ${
              errors.email && touchedFields.email
                ? css.formInputError
                : touchedFields.email
                ? css.formInputValid
                : ""
            }`}
            type="email"
            {...register("email")}
            autoComplete="email"
            placeholder={t("placeholder.email")}
          />
          {errors.email && touchedFields.email ? (
            <div className={css.errorMsg}>{errors.email.message}</div>
          ) : null}
        </label>
        
        {/* {errorMessage && <p className={css.error}>{errorMessage}</p>} */}
        <button className={css.submitBtn} type="submit">
          {t("submit")}
        </button>
      </form>
    </div>
  );
};

export default PasswordRecoverForm;
