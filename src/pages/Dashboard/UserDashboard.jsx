import useFetchUserDB from "../../hooks/useFetchUserDB";

const UserDashboard = () => {
  const [userDB] = useFetchUserDB();

  return (
    <div className="space-y-8 text-3xl">
      <h1 className="text-center font-bold md:text-5xl">Your Dashboard</h1>

      {userDB && (
        <div className="mx-auto w-fit space-y-8 p-8 shadow">
          <img
            className="mx-auto max-w-xs"
            src={userDB?.photoURL}
            alt={userDB?.displayName}
          />
          <h2>
            <b>ID: </b>
            {userDB?._id}
          </h2>
          <h2>
            <b>Name: </b>
            {userDB?.name}
          </h2>
          <h2>
            <b>Email: </b>
            {userDB?.email}
          </h2>
          <h2>
            <b>user: </b>
            {userDB?.userType}
          </h2>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
