import SingUpForm from "../../components/SignUpForm/SignUpForm";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

const SignUpPage = () => {
  return (
    <>
      <DocumentTitle>Sign Up</DocumentTitle>
      <SingUpForm />

      <AdvantagesSection isHideMobile={true} />
    </>
  );
};

export default SignUpPage;
