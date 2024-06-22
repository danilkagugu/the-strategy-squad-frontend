
import SingUpFrom from "../../components/SignUpForm/SignUpForm";

import { apiRegisterUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const SignUpPage = () => {

  const dispatch = useDispatch()

  const onRegister = (formData) => {
    dispatch(apiRegisterUser(formData))
  }


  return (
    <>
      <SingUpFrom onRegister={onRegister} />
      <SingUpFrom onRegister={onRegister} />
    </>

  )

};

export default SignUpPage;
