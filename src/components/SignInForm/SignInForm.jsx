import css from "./SignInForm.module.css";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../Logo/Logo";
import sprite from "../../assets/icons.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import GoogleBtn from "../GoogleBtn/GoogleBtn";
import { useTranslation } from "react-i18next";

const UserLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email!")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Password is required"),
});

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

const SignInForm = ({ onLogin }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(UserLoginSchema),
    defaultValues: INITIAL_FORM_DATA,
  });
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = (data) => {
    onLogin(data);
  };

  return (
    <div className={css.signInFormWrapper}>
      <div className={css.logoSingIn}>
        <Logo />
      </div>
      <div className={css.signInContainer}>
        <form
          className={css.formRegistration}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className={css.formTitle}>{t("sign_in")}</h1>
          <div className={css.inputConatiner}>
            <label className={css.labelRegistration}>
              <span className={css.formRegistrationText}>{t("email")}</span>
              <input
                className={`${css.formInputRegistration} ${
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
            <label className={css.labelRegistration}>
              <span className={css.formRegistrationText}>{t("password")}</span>
              <div className={css.inputIconWrapper}>
                <input
                  className={`${css.formInputRegistration} ${
                    errors.password && touchedFields.password
                      ? css.formInputError
                      : touchedFields.password
                      ? css.formInputValid
                      : ""
                  }`}
                  type={isVisible ? "text" : "password"}
                  {...register("password")}
                  autoComplete="new-password"
                  placeholder={t("placeholder.password")}
                />
                <svg
                  width="20"
                  height="20"
                  className={css.singUpIcon}
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <use
                    href={`${sprite}#icon-${isVisible ? "eye" : "eye-off"}`}
                  ></use>
                </svg>
              </div>
              {errors.password && touchedFields.password ? (
                <div className={css.errorMsg}>{errors.password.message}</div>
              ) : null}
            </label>
          </div>
          <button
            className={css.submitBtn}
            type="submit"
            title="Click to register user"
            aria-label="Add user"
          >
            {t("sign_in")}
          </button>

          <div className={css.signInInfo}>
            <Link to={"/password-recover"} className={css.forgotPasswordText}>
              Forgot your password?
            </Link>

            <p className={css.registrationText}>
              <span className={css.registrationTextInfo}>
                Don&apos;t have an account?&nbsp;
              </span>{" "}
              <Link to={"/signup"} className={css.signInLink}>
                {" "}
                Sign Up
              </Link>
            </p>

            <GoogleBtn type="In" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
