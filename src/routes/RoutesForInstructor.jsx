import Dashboard from "../pages/Dashboard";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import UserDashboard from "../pages/Dashboard/UserDashboard";
import PrivateForInstructorRoutes from "./PrivateForInstructorRoutes";

const RoutesForInstructor = [
  {
    path: "/dashboard",
    element: (
      <PrivateForInstructorRoutes>
        <Dashboard />
      </PrivateForInstructorRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateForInstructorRoutes>
            <UserDashboard />
          </PrivateForInstructorRoutes>
        ),
      },
      {
        path: "add-class",
        element: (
          <PrivateForInstructorRoutes>
            <AddClass />
          </PrivateForInstructorRoutes>
        ),
      },
    ],
  },
];

export default RoutesForInstructor;
