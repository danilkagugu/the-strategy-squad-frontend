import { useSearchParams } from "react-router-dom";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, logInWithGoogle } from "../../redux/auth/operations";
import { selectToken } from "../../redux/auth/selectors";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

const HomePage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  const currentToken = useSelector(selectToken);

  const token = searchParams.get("token");
  useEffect(() => {
    if (token) {
      dispatch(logInWithGoogle(token));


    }
  }, []);

  useEffect(() => {
    if (currentToken && token) {

      dispatch(getUserInfo());

      window.location.href = "/tracker";
    }
  }, [currentToken]);
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <WelcomeSection />
      <AdvantagesSection />
    </>
  );
};

export default HomePage;
