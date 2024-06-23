
import SingUpForm from "../../components/SignUpForm/SignUpForm";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import { apiRegisterUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const SignUpPage = () => {

  const dispatch = useDispatch()

  const onRegister = (formData) => {
    dispatch(apiRegisterUser(formData))
  }


  return (
    <>
      <SingUpForm onRegister={onRegister} />
      <AdvantagesSection isHideMobile={true} />

    </>

  )

};

export default SignUpPage;
