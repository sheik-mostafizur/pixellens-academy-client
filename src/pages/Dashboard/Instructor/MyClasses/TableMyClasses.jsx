import {BiEdit} from "react-icons/bi";
import {Link} from "react-router-dom";
import {AiFillDelete} from "react-icons/ai";
import axiosURL from "../../../../axios/axiosURL";
import Swal from "sweetalert2";

const TableMyClasses = ({classes}) => {
  const handleRemoveClass = (_id) => {
    axiosURL.delete(`/instructor-classes/${_id}`).then(({data}) => {
      if (data.deletedCount) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Deleted successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs uppercase text-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="bg-gray-50 px-6 py-3 dark:bg-gray-800">
              Class Name
            </th>
            <th scope="col" className="px-6 py-3">
              Available Seats
            </th>
            <th scope="col" className="bg-gray-50 px-6 py-3 dark:bg-gray-800">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Enrolled
            </th>
            <th scope="col" className="bg-gray-50 px-6 py-3 dark:bg-gray-800">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              FeedBack
            </th>
            <th scope="col" className="bg-gray-50 px-6 py-3 dark:bg-gray-800">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {classes &&
            classes.map((cls) => (
              <tr
                key={cls._id}
                className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                  {cls?.className}
                </th>
                <th scope="row" className="px-6 py-4">
                  {cls?.availableSeats}
                </th>
                <th
                  scope="row"
                  className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                  {cls?.price}
                </th>
                <th scope="row" className="px-6 py-4">
                  {cls?.enrolled}
                </th>
                <th
                  scope="row"
                  className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                  <span
                    className={`rounded px-2 py-1 text-white
                      ${
                        cls?.status === "denied"
                          ? "bg-red-600"
                          : cls?.status === "approved"
                          ? "bg-green-600"
                          : "bg-yellow-500"
                      }
                    `}>
                    {cls?.status}
                  </span>
                </th>
                <td className="px-6 py-4">{cls?.feedback}</td>
                <td className="flex items-center gap-4 bg-gray-50 px-6 py-4 dark:bg-gray-800">
                  <Link to={`/dashboard/update-class/${cls._id}`}>
                    <button className="text-3xl text-primary-900">
                      <BiEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleRemoveClass(cls._id)}
                    className="text-3xl text-red-600">
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableMyClasses;
