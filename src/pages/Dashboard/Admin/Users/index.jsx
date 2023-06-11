import Swal from "sweetalert2";
import {GiTeacher} from "react-icons/gi";
import {RiAdminFill} from "react-icons/ri";
import LoaderSpinner from "../../../../components/LoaderSpinner";
import axiosURL from "../../../../axios/axiosURL";
import useFetchData from "../../../../hooks/useFetchData";
import {Helmet} from "react-helmet-async";

const Users = () => {
  const {data: users, loading, refetch} = useFetchData("/users");

  const handleMakeAdmin = (_id, name) => {
    axiosURL.patch(`/admin/${_id}`).then(({data}) => {
      if (data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleMakeInstructor = (_id, name) => {
    axiosURL.patch(`/instructor/${_id}`).then(({data}) => {
      if (data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} is an Instructor Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Manage Users | PixelLens Academy</title>
      </Helmet>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="text-xs uppercase text-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="bg-gray-50 px-6 py-3 dark:bg-gray-800">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th
                  scope="col"
                  className="bg-gray-50 px-6 py-3 dark:bg-gray-800">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user?.photoURL}
                        alt={user?.name}
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {user?.name}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                      <button
                        onClick={() =>
                          handleMakeInstructor(user._id, user.name)
                        }
                        className="btn me-1 text-2xl"
                        disabled={user?.userType === "instructor"}>
                        <GiTeacher />
                      </button>
                      <button
                        onClick={() => handleMakeAdmin(user._id, user.name)}
                        className="btn text-2xl"
                        disabled={user?.userType === "admin"}>
                        <RiAdminFill />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default Users;
