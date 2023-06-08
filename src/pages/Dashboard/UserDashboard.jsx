import {uesAuthContext} from "../../context/AuthContext";
import useUserType from "../../hooks/useUserType";

const UserDashboard = () => {
  const {user} = uesAuthContext();
  const [userType] = useUserType();
  return (
    <div className="space-y-8 text-3xl md:text-5xl">
      <h1 className="font-bold">Your Dashboard</h1>

      {user && (
        <div className="mx-auto max-w-3xl space-y-8 p-8 shadow">
          <img src={user?.photoURL} alt="" />
          <h2>
            <b>Name: </b>
            {user?.displayName}
          </h2>
          <h2>
            <b>Email: </b>
            {user?.email}
          </h2>
          <h2>
            <b>User: </b>
            {userType}
          </h2>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
