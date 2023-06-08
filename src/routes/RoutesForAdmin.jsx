import Dashboard from "../pages/Dashboard";
import Users from "../pages/Dashboard/Admin/Users";
import UserDashboard from "../pages/Dashboard/UserDashboard";
import PrivateForAdminRoutes from "./PrivateForAdminRoutes";

const RoutesForAdmin = [
  {
    path: "/dashboard",
    element: (
      <PrivateForAdminRoutes>
        <Dashboard />
      </PrivateForAdminRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateForAdminRoutes>
            <UserDashboard />
          </PrivateForAdminRoutes>
        ),
      },
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
];

export default RoutesForAdmin;
