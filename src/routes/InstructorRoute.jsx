import {Navigate, useLocation} from "react-router";
import {uesAuthContext} from "../context/AuthContext";
import LoaderSpinner from "../components/LoaderSpinner";
import useUserType from "../hooks/useUserType";

const InstructorRoute = ({children}) => {
  const {user, loading} = uesAuthContext();
  const [userType, isUserTypeLoading] = useUserType();
  const location = useLocation();

  if (loading || isUserTypeLoading) {
    return <LoaderSpinner />;
  }

  if (user && userType === "instructor") {
    return children;
  }
  return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default InstructorRoute;
