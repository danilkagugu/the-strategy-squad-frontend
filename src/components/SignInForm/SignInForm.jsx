
import css from "../SignInForm/SignInForm.module.css"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup";
import Logo from "../Logo/Logo";
import sprite from '../../assets/icons.svg';
import { Link } from "react-router-dom";


const UserLoginSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Email is required"),
    password: Yup.string().min(6, "Too Short!").max(50, "Too Long!").required("Password is required"),


});


const INITIAL_FORM_DATA = {
    email: "",
    password: "",

}

const SignInForm = ({ onLogin }) => {
    const handleSubmit = (data, formActions) => {
        onLogin((data))
        formActions.resetForm()
    }

    return (<div className={css.signInFormWrapper}>

        <div className={css.logoSingIn}> <Logo /></div>
        <Formik validationSchema={UserLoginSchema}
            initialValues={INITIAL_FORM_DATA}
            onSubmit={handleSubmit}>
            <div className={css.signInContainer}> <Form className={css.formRegistration}>
                <h1 className={css.formTitle}>Sign In</h1>
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
                                type="password"
                                name="password"
                                autoComplete="new-password"
                                placeholder="Enter your password"
                            />
                            <svg width="20" height="20" className={css.singUpIcon}>
                                <use href={`${sprite}#icon-eye-off`}></use>
                            </svg>

                        </div>
                    </label>
                    <label className={css.labelRegistration}>
                        <span className={css.formRegistrationText}>Repeat Password</span>

                    </label></div>

                <button className={css.submitBtn} type="submit" title="Click to register user" aria-label="Add user">Sign in</button>

            </Form>
                <p className={css.registrationText}><span className={css.registrationTextInfo}>Already have account?</span> <Link to={"/signup"} className={css.signInLink}>
                    Sign Up
                </Link></p>
            </div>

        </Formik >
    </div >


    )
}

export default SignInForm;