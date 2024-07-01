import css from "../SignUpForm/SignUpForm.module.css";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../Logo/Logo";
import sprite from "../../assets/icons.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { requestSignUp } from "../../services/authApi";
import { toast } from "react-toastify";
import GoogleBtn from "../GoogleBtn/GoogleBtn";
import { useTranslation } from "react-i18next";

const UserRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email!")
    .required("Email is required"),
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

const SignUpForm = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(UserRegisterSchema),
    defaultValues: INITIAL_FORM_DATA,
  });
  const onSubmit = async (data) => {
    try {
      const response = await requestSignUp(data);
      toast.success("You have successfully registered");
      if (response) {
        navigate("/signin");
      }
    } catch (e) {
      toast.error(e.response.data.message || "Something went wrong");
    }
  };

  return (
    <div className={css.singUpFormWrapper}>
      <div className={css.logoSingUp}>
        <Logo />
      </div>
      <div className={css.signUpContainer}>
        <form
          className={css.formRegistration}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className={css.formTitle}>{t("sign_up")}</h1>
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
            <label className={css.labelRegistration}>
              <span className={css.formRegistrationText}>
                {t("repeat_password")}
              </span>
              <div className={css.inputIconWrapper}>
                <input
                  className={`${css.formInputRegistration} ${
                    errors.repeatPassword && touchedFields.repeatPassword
                      ? css.formInputError
                      : touchedFields.repeatPassword
                      ? css.formInputValid
                      : ""
                  }`}
                  type={isVisible ? "text" : "password"}
                  {...register("repeatPassword")}
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
              {errors.repeatPassword && touchedFields.repeatPassword ? (
                <div className={css.errorMsg}>
                  {errors.repeatPassword.message}
                </div>
              ) : null}
            </label>
          </div>
          <button
            className={css.submitBtn}
            type="submit"
            title="Click to register user"
            aria-label="Add user"
          >
            {t("sign_up")}
          </button>

          <div className={css.signUpInfo}>
            <p className={css.registrationText}>
              <span className={css.registrationTextInfo}>
                {t("have_account")}?
              </span>{" "}
              <Link to={"/signin"} className={css.signInLink}>
                {t("sign_in")}
              </Link>
            </p>
            <GoogleBtn type="Up" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
