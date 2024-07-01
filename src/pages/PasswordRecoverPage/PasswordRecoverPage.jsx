// import React from "react";
import PasswordRecover from "../../components/PasswordRecover/PasswordRecover";
import { useDispatch } from "react-redux";
import { apiPasswordRecover } from "../../redux/auth/operations";

const PasswordRecoverPage = () => {
  const dispatch = useDispatch();

  const onEmailSent = (email) => {
    dispatch(apiPasswordRecover(email));
  };

  return (
    <>
      <PasswordRecover onEmailSent={onEmailSent} />
    </>
  );
};

export default PasswordRecoverPage;
