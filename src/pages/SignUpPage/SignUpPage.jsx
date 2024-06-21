import AuthLayout from "../../components/AuthLayout/AuthLayout";
import SingUpFrom from "../../components/SignUpForm/SignUpForm";
import { apiRegisterUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const SignUpPage = () => {

  const dispatch = useDispatch()

  const onRegister = (formData) => {
    dispatch(apiRegisterUser(formData))
  }


  return (

    <AuthLayout>
      <SingUpFrom onRegister={onRegister} />
      <SingUpFrom onRegister={onRegister} />
    </AuthLayout>)

};

export default SignUpPage;
