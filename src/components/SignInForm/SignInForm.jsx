import css from "./SignInForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Logo from "../Logo/Logo";
import sprite from "../../assets/icons.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const UserLoginSchema = (t) =>
  Yup.object().shape({
    email: Yup.string()
      .email(t("validation.valid_email"))
      .required(t("validation.required_email")),
    password: Yup.string()
      .min(6, t("validation.short"))
      .max(50, t("validation.long"))
      .required(t("validation.required_password")),
  });

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

const SignInForm = ({ onLogin }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (data, formActions) => {
    onLogin(data);
    formActions.resetForm();
  };

  return (
    <div className={css.signInFormWrapper}>
      <div className={css.logoSingIn}>
        {" "}
        <Logo />
      </div>

      <Formik
        validationSchema={UserLoginSchema(t)}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <div className={css.signInContainer}>
            <Form className={css.formRegistration}>
              <h1 className={css.formTitle}>{t("sign_in")}</h1>
              <div className={css.inputConatiner}>
                <label className={css.labelRegistration}>
                  <span className={css.formRegistrationText}>{t("email")}</span>
                  <Field
                    className={`${css.formInputRegistration} ${
                      errors.email && touched.email
                        ? css.formInputError
                        : touched.email
                        ? css.formInputValid
                        : ""
                    }`}
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder={t("placeholder.email")}
                  />
                  {errors.email && touched.email ? (
                    <div className={css.errorMsg}>{errors.email}</div>
                  ) : null}
                </label>
                <label className={css.labelRegistration}>
                  <span className={css.formRegistrationText}>
                    {t("password")}
                  </span>
                  <div className={css.inputIconWrapper}>
                    <Field
                      className={`${css.formInputRegistration} ${
                        errors.password && touched.password
                          ? css.formInputError
                          : touched.password
                          ? css.formInputValid
                          : ""
                      }`}
                      type={isVisible ? "text" : "password"}
                      name="password"
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
                  {errors.password && touched.password ? (
                    <div className={css.errorMsg}>{errors.password}</div>
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
              <p className={css.registrationText}>
                <span className={css.registrationTextInfo}>
                  {t("have_not_acc")}
                </span>
                <Link to={"/signup"} className={css.signInLink}>
                  {t("sign_up")}
                </Link>
              </p>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
