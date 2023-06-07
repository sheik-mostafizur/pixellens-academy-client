import {uesAuthContext} from "../../context/AuthContext";
import useAdmin from "../../hooks/useAdmin";

const UserDashboard = () => {
  const {user} = uesAuthContext();
  const [isAdmin] = useAdmin();
  return (
    <div>
      <h1>UserDashboard</h1>
      <h2>Name: {user?.displayName}</h2>
      {isAdmin ? <h3>User Type: Admin</h3> : <h3>User</h3>}
    </div>
  );
};

export default UserDashboard;
