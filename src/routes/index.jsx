import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";

import Dashboard from "../pages/Dashboard";
import UserDashboard from "../pages/Dashboard/UserDashboard";
import PrivateForInstructorRoutes from "./PrivateForInstructorRoutes";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import Users from "../pages/Dashboard/Admin/Users";
import PrivateForAdminRoutes from "./PrivateForAdminRoutes";
import PrivateRoutes from "./PrivateRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <UserDashboard />
          </PrivateRoutes>
        ),
      },
      // Instructor
      {
        path: "add-class",
        element: (
          <PrivateForInstructorRoutes>
            <AddClass />
          </PrivateForInstructorRoutes>
        ),
      },
      // admin
      {
        path: "users",
        element: (
          <PrivateForAdminRoutes>
            <Users />
          </PrivateForAdminRoutes>
        ),
      },
    ],
  },
]);
export default Routes;
