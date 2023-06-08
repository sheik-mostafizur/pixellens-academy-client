import {Navigate, useLocation} from "react-router";
import {uesAuthContext} from "../context/AuthContext";
import LoaderSpinner from "../components/LoaderSpinner";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({children}) => {
  const {user, loading} = uesAuthContext();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return <LoaderSpinner />;
  }

  if (user && isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default InstructorRoute;
