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
import Instructors from "../pages/Instructors";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses";
import Instructor from "../pages/Dashboard/Admin/InstructorClasses";
import Classes from "../pages/Classes";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses";
import PrivateForStudentRoutes from "./PrivateForStudentRoutes";
import SelectedClasses from "../pages/Dashboard/Student/SelectedClasses";
import Payment from "../components/Payment";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";

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
    path: "/instructors",
    element: <Instructors />,
  },
  {
    path: "/classes",
    element: <Classes />,
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
      {
        path: "selected-classes",
        element: (
          <PrivateForStudentRoutes>
            <SelectedClasses />
          </PrivateForStudentRoutes>
        ),
      },
      {
        path: "enrolled-classes",
        element: (
          <PrivateForStudentRoutes>
            <EnrolledClasses />
          </PrivateForStudentRoutes>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateForStudentRoutes>
            <Payment />
          </PrivateForStudentRoutes>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateForStudentRoutes>
            <PaymentHistory />
          </PrivateForStudentRoutes>
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
      {
        path: "my-classes",
        element: (
          <PrivateForInstructorRoutes>
            <MyClasses />
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
      {
        path: "classes",
        element: (
          <PrivateForAdminRoutes>
            <Instructor />
          </PrivateForAdminRoutes>
        ),
      },
    ],
  },
]);
export default Routes;
