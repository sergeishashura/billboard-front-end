import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Loading from "../components/loading/Loading";
import { Suspense } from "react";
import { routes } from "./nav.data";
import { LOGIN_URL } from "./routes";
import LoginPage from "../pages/common/LoginPage";
import ErrorPage from "../pages/common/ErrorPage";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";

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
      children: routes,
      errorElement: <ErrorPage />,
    },
    {
      path: LOGIN_URL,
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
