import {uesAuthContext} from "../../context/AuthContext";
import useUserType from "../../hooks/useUserType";

const UserDashboard = () => {
  const {user} = uesAuthContext();
  const [userType] = useUserType();
  return (
    <div>
      <h1>UserDashboard</h1>
      <h2>Name: {user?.displayName}</h2>
      {userType && <h3>User Type: {userType}</h3>}
    </div>
  );
};

export default UserDashboard;
