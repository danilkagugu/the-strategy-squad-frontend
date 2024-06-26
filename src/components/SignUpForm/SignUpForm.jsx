
import css from "../SignUpForm/SignUpForm.module.css"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup";
import Logo from "../Logo/Logo";
import sprite from '../../assets/icons.svg';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { requestSignUp } from "../../services/authApi";
import { toast } from 'react-toastify';




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

const SingUpFrom = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (data, formActions) => {
        try {
            const response = await requestSignUp(data)
            formActions.resetForm()

            toast.success("You have successfully registered")

            if (response) {
                navigate('/signin')
            }
        } catch (e) {
            toast.error(e.response.data.message || "Something went wrong")
        }

    }

    return (<div className={css.singUpFormWrapper}>

        <div className={css.logoSingUp}> <Logo /></div>

        <Formik validationSchema={UserRegisterSchema}
            initialValues={INITIAL_FORM_DATA}
            onSubmit={handleSubmit}>

            {({ errors, touched }) => (

                <div className={css.signUpContainer}>

                    <Form className={css.formRegistration}>
                        <h1 className={css.formTitle}>Sign Up</h1>
                        <div className={css.inputConatiner}>

                            <label className={css.labelRegistration}>
                                <span className={css.formRegistrationText}>Email</span>

                                <Field
                                    className={`${css.formInputRegistration} ${errors.email && touched.email ? css.formInputError : (touched.email ? css.formInputValid : '')}`}
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="Enter your email"

                                />

                                {errors.email && touched.email ? <div className={css.errorMsg}>{errors.email}</div> : null}

                            </label>
                            <label className={css.labelRegistration}>
                                <span className={css.formRegistrationText}>Password</span>
                                <div className={css.inputIconWrapper}>
                                    <Field
                                        className={`${css.formInputRegistration} ${errors.password && touched.password ? css.formInputError : (touched.password ? css.formInputValid : '')}`}
                                        type={isVisible ? "text" : "password"}
                                        name="password"
                                        autoComplete="new-password"
                                        placeholder="Enter your password"
                                    />
                                    <svg width="20" height="20" className={css.singUpIcon} onClick={() => setIsVisible(!isVisible)}>
                                        {!isVisible ? <use href={`${sprite}#icon-eye-off`}></use> : <use href={`${sprite}#icon-eye`}></use>}
                                    </svg>

                                </div>
                                {errors.password && touched.password ? <div className={css.errorMsg}>{errors.password}</div> : null}

                            </label>
                            <label className={css.labelRegistration}>
                                <span className={css.formRegistrationText}>Repeat Password</span>
                                <div className={css.inputIconWrapper}>
                                    <Field
                                        className={`${css.formInputRegistration} ${errors.repeatPassword && touched.repeatPassword ? css.formInputError : (touched.repeatPassword ? css.formInputValid : '')}`}
                                        type={isVisible ? "text" : "password"}
                                        name="repeatPassword"
                                        autoComplete="new-password"
                                        placeholder="Repeat your password"
                                    />

                                    <svg width="20" height="20" className={css.singUpIcon} onClick={() => setIsVisible(!isVisible)}>
                                        {!isVisible ? <use href={`${sprite}#icon-eye-off`}></use> : <use href={`${sprite}#icon-eye`}></use>}
                                    </svg>

                                </div>
                                {errors.repeatPassword && touched.repeatPassword ? <div className={css.errorMsg}>{errors.repeatPassword}</div> : null}
                            </label></div>

                        <button className={css.submitBtn} type="submit" title="Click to register user" aria-label="Add user">Sign up</button>
                        <p className={css.registrationText}><span className={css.registrationTextInfo}>Already have account?</span> <Link to={"/signin"} className={css.signInLink}>
                            Sign In
                        </Link></p>
                    </Form>

                </div>
            )}

        </Formik >
    </div >


    )
}

export default SingUpFrom;