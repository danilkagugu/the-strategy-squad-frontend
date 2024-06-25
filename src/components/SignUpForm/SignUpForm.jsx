
import css from "../SignUpForm/SignUpForm.module.css"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup";
import Logo from "../Logo/Logo";
import sprite from '../../assets/icons.svg';
import { Link } from "react-router-dom";
import { useState } from "react";


const UserRegisterSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Email is required"),
    password: Yup.string().min(6, "Too Short!").max(50, "Too Long!").required("Password is required"),
    repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Repeat Password is required")

});


const INITIAL_FORM_DATA = {
    email: "",
    password: "",
    repeatPassword: ""
}

const SingUpFrom = ({ onRegister }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = (data, formActions) => {
        onRegister((data))
        formActions.resetForm()
    }

    return (<div className={css.singUpFormWrapper}>

        <div className={css.logoSingUp}> <Logo /></div>
        <Formik validationSchema={UserRegisterSchema}
            initialValues={INITIAL_FORM_DATA}
            onSubmit={handleSubmit}>
            <div className={css.signUpContainer}>

                <Form className={css.formRegistration}>
                    <h1 className={css.formTitle}>Sign Up</h1>
                    <div className={css.inputConatiner}>  <label className={css.labelRegistration}>
                        <span className={css.formRegistrationText}>Email</span>

                        <Field
                            className={css.formInputRegistration}
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="Enter your email"

                        />

                    </label>
                        <label className={css.labelRegistration}>
                            <span className={css.formRegistrationText}>Password</span>
                            <div className={css.inputIconWrapper}>
                                <Field
                                    className={css.formInputRegistration}
                                    type={isVisible ? "text" : "password"}
                                    name="password"
                                    autoComplete="new-password"
                                    placeholder="Enter your password"
                                />

                                <svg width="20" height="20" className={css.singUpIcon} onClick={() => setIsVisible(!isVisible)}>
                                    {!isVisible ? <use href={`${sprite}#icon-eye-off`}></use> : <use href={`${sprite}#icon-eye`}></use>}
                                </svg>


                            </div>
                        </label>
                        <label className={css.labelRegistration}>
                            <span className={css.formRegistrationText}>Repeat Password</span>
                            <div className={css.inputIconWrapper}>
                                <Field
                                    className={css.formInputRegistration}
                                    type={isVisible ? "text" : "password"}
                                    name="repeatPassword"
                                    autoComplete="new-password"
                                    placeholder="Repeat your password"
                                />
                                <svg width="20" height="20" className={css.singUpIcon} onClick={() => setIsVisible(!isVisible)}>
                                    {!isVisible ? <use href={`${sprite}#icon-eye-off`}></use> : <use href={`${sprite}#icon-eye`}></use>}
                                </svg>

                            </div>
                        </label></div>

                    <button className={css.submitBtn} type="submit" title="Click to register user" aria-label="Add user">Sign up</button>
                    <p className={css.registrationText}><span className={css.registrationTextInfo}>Already have account?</span> <Link to={"/signin"} className={css.signInLink}>
                        Sign In
                    </Link></p>
                </Form>

            </div>

        </Formik >
    </div >


    )
}

export default SingUpFrom;