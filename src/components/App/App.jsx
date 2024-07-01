import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "../Container/Container";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import { useDispatch } from "react-redux";
import { apiRefreshUser } from "../../redux/auth/operations";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordRecoverPage from "../../pages/PasswordRecoverPage/PasswordRecoverPage";
import ResetPasswordPage from "../../pages/ResetPasswordPage/ResetPasswordPage";
// import GoogleRedirect from '../GoogleRedirect/GoogleRedirect';
import "../i18n/i18n.js";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const SignInPage = lazy(() => import("../../pages/SignInPage/SignInPage"));
const SignUpPage = lazy(() => import("../../pages/SignUpPage/SignUpPage"));
const TrackerPage = lazy(() => import("../../pages/TrackerPage/TrackerPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return (
    <Container>
      {" "}
      <Suspense fallback={null}>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/"/>}/> */}
          <Route
            path="/"
            element={
              <RestrictedRoute>
                <HomePage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute>
                <SignUpPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute>
                <SignInPage />
              </RestrictedRoute>
            }
          />

          <Route
            path="/tracker"
            element={
              <PrivateRoute>
                <TrackerPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/password-recover"
            element={
              <RestrictedRoute>
                <PasswordRecoverPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <RestrictedRoute>
                <ResetPasswordPage />
              </RestrictedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <ToastContainer position="top-center" />
      </Suspense>
    </Container>
  );
}

export default App;
