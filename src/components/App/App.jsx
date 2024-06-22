import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "../Container/Container";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const SignInPage = lazy(() => import("../../pages/SignInPage/SignInPage"));
const SignUpPage = lazy(() => import("../../pages/SignUpPage/SignUpPage"));
const TrackerPage = lazy(() => import("../../pages/TrackerPage/TrackerPage"));

function App() {
  return (
    <Container> <Suspense fallback={null}>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/"/>}/> */}
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/" element={<TrackerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense></Container>
  );
}

export default App;
