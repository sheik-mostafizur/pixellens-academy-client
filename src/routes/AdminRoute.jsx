import {Navigate, useLocation} from "react-router";
import useAdmin from "../hooks/useAdmin";
import {uesAuthContext} from "../context/AuthContext";
import LoaderSpinner from "../components/LoaderSpinner";

const AdminRoute = ({children}) => {
  const {user, loading} = uesAuthContext();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <LoaderSpinner />;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;
