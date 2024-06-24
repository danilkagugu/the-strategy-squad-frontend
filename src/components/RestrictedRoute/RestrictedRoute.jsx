import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children, redirectTo = "/" }) => {
  const isSignedIn = useSelector(selectIsLoggedIn);
  return isSignedIn ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;
