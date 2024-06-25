
import SignInForm from "../../components/SignInForm/SignInForm";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection"
import { apiLoginUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";



const SignInPage = () => {

  const dispatch = useDispatch()

  const onLogin = (formData) => {
    dispatch(apiLoginUser(formData))
  }

  return (<>
    <SignInForm onLogin={onLogin} />
    <AdvantagesSection isHideMobile={true} />

  </>

  )
};

export default SignInPage;
