
import css from "../SignUpForm/SignUpForm.module.css"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup";


const UserRegisterSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Email is required"),
    password: Yup.string().min(6, "Too Short!").max(50, "Too Long!").required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Confirm Password is required")

});


const INITIAL_FORM_DATA = {
    email: "",
    password: "",
    confirmPassword: ""
}

const SingUpFrom = ({ onRegister }) => {
    const handleSubmit = (data, formActions) => {
        onRegister((data))
        formActions.resetForm()
    }

    return (<div className={css.singUpFormWrapper}>


        <Formik validationSchema={UserRegisterSchema}
            initialValues={INITIAL_FORM_DATA}
            onSubmit={handleSubmit}>
            <div className={css.container}> <Form className={css.formRegistration}>
                <h1 className={css.formTitle}>Sing Up</h1>
                <label className={css.labelRegistration}>
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
                    <Field
                        className={css.formInputRegistration}
                        type="password"
                        name="password"
                        autoComplete="new-password"
                        placeholder="Enter your password"
                    />
                </label>
                <label className={css.labelRegistration}>
                    <span className={css.formRegistrationText}>Repeat Password</span>
                    <Field
                        className={css.formInputRegistration}
                        type="password"
                        name="confirmPassword"
                        autoComplete="new-password"
                        placeholder="Repeat your password"
                    />
                </label>

                <button className={css.submitBtn} type="submit" title="Click to register user" aria-label="Add user">Sign up</button>

            </Form></div>
        </Formik>
    </div>


    )
}

export default SingUpFrom;