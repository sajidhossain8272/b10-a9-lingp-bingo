import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LetsLearn from "./components/LetsLearn.jsx";
import Lessons from "./components/Lessons.jsx";
import Tutorials from "./components/Tutorials.jsx";
import Auth from "./components/Auth.jsx";
import Signup from "./components/Signup.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import PrivateRoute from "./components/PrivateRoute";
import ErrorPage from "./components/ErrorPage.jsx";
import Profile from "./components/Profile.jsx";

import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/lets-learn",
    element: <LetsLearn />,
  },
  {
    path: "/lesson/:lessonNo",
    element: <PrivateRoute element={<Lessons />} />,
    loader: ({ params }) => {
      return { lessonNo: params.lessonNo };
    },
  },
  {
    path: "/tutorial",
    element: <PrivateRoute element={<Tutorials />} />,
  },
  {
    path: "/Auth",
    element: <Auth />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </HelmetProvider>
);
