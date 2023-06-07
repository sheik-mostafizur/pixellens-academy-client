import axios from "axios";
import {useEffect, useState} from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/users").then(({data}) => setUsers(data));
  }, []);
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase text-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="bg-gray-50 px-6 py-3 dark:bg-gray-800">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="bg-gray-50 px-6 py-3 dark:bg-gray-800">
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
                      className="btn-sm btn py-1 "
                      disabled={user?.userType === "iInstructor"}>
                      Instructor
                    </button>
                    <button
                      className="btn-sm btn py-1"
                      disabled={user?.userType === "admin"}>
                      Admin
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Users;
