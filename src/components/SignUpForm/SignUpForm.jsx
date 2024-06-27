import css from "../SignUpForm/SignUpForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Logo from "../Logo/Logo";
import sprite from "../../assets/icons.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { requestSignUp } from "../../services/authApi";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const UserRegisterSchema = (t) =>
  Yup.object().shape({
    email: Yup.string()
      .email(t("validation.valid_email"))
      .required(t("validation.required_email")),
    password: Yup.string()
      .min(6, t("validation.short"))
      .max(50, t("validation.long"))
      .required(t("validation.required_password")),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required(t("validation.required_password_repeat")),
  });

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
  repeatPassword: "",
};

const SingUpFrom = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleSubmit = async (data, formActions) => {
    try {
      const response = await requestSignUp(data);
      formActions.resetForm();

      toast.success(t("validation.successfully_register"));

      if (response) {
        navigate("/signin");
      }
    } catch (e) {
      toast.error(e.response.data.message || t("validation.went_wrong"));
    }
  };

  return (
    <div className={css.singUpFormWrapper}>
      <div className={css.logoSingUp}>
        {" "}
        <Logo />
      </div>

      <Formik
        validationSchema={UserRegisterSchema(t)}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <div className={css.signUpContainer}>
            <Form className={css.formRegistration}>
              <h1 className={css.formTitle}>Sign Up</h1>
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
                    placeholder="Enter your email"
                  />

                  {errors.email && touched.email ? (
                    <div className={css.errorMsg}>{errors.email}</div>
                  ) : null}
                </label>
                <label className={css.labelRegistration}>
                  <span className={css.formRegistrationText}>
                    {t("password")}{" "}
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
                      placeholder="Enter your password"
                    />
                    <svg
                      width="20"
                      height="20"
                      className={css.singUpIcon}
                      onClick={() => setIsVisible(!isVisible)}
                    >
                      {!isVisible ? (
                        <use href={`${sprite}#icon-eye-off`}></use>
                      ) : (
                        <use href={`${sprite}#icon-eye`}></use>
                      )}
                    </svg>
                  </div>
                  {errors.password && touched.password ? (
                    <div className={css.errorMsg}>{errors.password}</div>
                  ) : null}
                </label>
                <label className={css.labelRegistration}>
                  <span className={css.formRegistrationText}>
                    {t("repeat_password")}
                  </span>
                  <div className={css.inputIconWrapper}>
                    <Field
                      className={`${css.formInputRegistration} ${
                        errors.repeatPassword && touched.repeatPassword
                          ? css.formInputError
                          : touched.repeatPassword
                          ? css.formInputValid
                          : ""
                      }`}
                      type={isVisible ? "text" : "password"}
                      name="repeatPassword"
                      autoComplete="new-password"
                      placeholder="Repeat your password"
                    />

                    <svg
                      width="20"
                      height="20"
                      className={css.singUpIcon}
                      onClick={() => setIsVisible(!isVisible)}
                    >
                      {!isVisible ? (
                        <use href={`${sprite}#icon-eye-off`}></use>
                      ) : (
                        <use href={`${sprite}#icon-eye`}></use>
                      )}
                    </svg>
                  </div>
                  {errors.repeatPassword && touched.repeatPassword ? (
                    <div className={css.errorMsg}>{errors.repeatPassword}</div>
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
              <p className={css.registrationText}>
                <span className={css.registrationTextInfo}>
                  {t("have_account")}
                </span>{" "}
                <Link to={"/signin"} className={css.signInLink}>
                  {t("sign_in")}
                </Link>
              </p>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SingUpFrom;
