import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Loading from "../components/loading/Loading";
import { Suspense } from "react";

import { LANDING_URL, LOGIN_URL, PUBLUC_AD, SIGN_UP_URL } from "./routes";
import LoginPage from "../pages/common/LoginPage";
import ErrorPage from "../pages/common/ErrorPage";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import { adminRoutes, userRoutes } from "./nav.data";
import { ROLE_ID } from "../constans/localStorage";
import { SignUpPage } from "../pages/common/SignUpPage";
import { LandingPage } from "../pages/common/LandingPage";
import { Advertisement } from "../pages/common/Advertisement";

const Router = () => {
  const router = createBrowserRouter([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children:
        localStorage.getItem(ROLE_ID) === "1" ? userRoutes : adminRoutes,
      errorElement: <ErrorPage />,
    },
    {
      path: LOGIN_URL,
      element: <LoginPage />,
    },
    {
      path: SIGN_UP_URL,
      element: <SignUpPage />,
    },
    {
      path: LANDING_URL,
      element: <LandingPage />,
    },
    {
      path: PUBLUC_AD,
      element: <Advertisement />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
