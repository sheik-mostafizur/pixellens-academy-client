import axios from "axios";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {GiTeacher} from "react-icons/gi";
import {RiAdminFill} from "react-icons/ri";
import LoaderSpinner from "../../../../components/LoaderSpinner";

const Users = () => {
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3001/users").then(({data}) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  const handleMakeAdmin = (_id, name) => {
    axios.patch(`http://localhost:3001/users/admin/${_id}`).then(({data}) => {
      if (data.modifiedCount) {
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
    axios
      .patch(`http://localhost:3001/users/instructor/${_id}`)
      .then(({data}) => {
        if (data.modifiedCount) {
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
                      className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white">
                      {user.name}
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
