import {Navigate, useLocation} from "react-router";
import LoaderSpinner from "../components/LoaderSpinner";
import {uesAuthContext} from "../context/AuthContext";

const PrivateRoutes = ({children}) => {
  const {user, loading} = uesAuthContext();
  const location = useLocation();

  if (loading) {
    return <LoaderSpinner />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;
