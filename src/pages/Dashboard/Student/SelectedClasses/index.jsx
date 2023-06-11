import Swal from "sweetalert2";
import axiosURL from "../../../../axios/axiosURL";
import LoaderSpinner from "../../../../components/LoaderSpinner";
import {uesAuthContext} from "../../../../context/AuthContext";
import useFetchData from "../../../../hooks/useFetchData";
import {AiFillDelete} from "react-icons/ai";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";

const SelectedClasses = () => {
  const {user} = uesAuthContext();
  const email = user && user?.email;
  const {data: carts, loading, refetch} = useFetchData(`/carts/${email}`);

  // get price in selected carts
  const price = carts.reduce((acc, sum) => {
    acc += sum.price;
    return acc;
  }, 0);

  const handleRemoveClass = (_id) => {
    axiosURL.delete(`/carts/${_id}`).then(({data}) => {
      if (data.deletedCount) {
        refetch();
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
  if (!carts?.length > 0) {
    return (
      <>
        {loading ? (
          <LoaderSpinner />
        ) : (
          <>
            <h1 className="py-8 text-center text-3xl font-bold text-red-600 md:text-5xl">
              Selected Classes Empty!
            </h1>
            <Helmet>
              <title>Cart Is Empty | PixelLens Academy</title>
            </Helmet>
          </>
        )}
      </>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Cart Classes | PixelLens Academy</title>
      </Helmet>

      <div className="mb-8 flex items-center justify-between gap-4 text-3xl font-bold text-primary-800">
        <h2>Selected Classes: {carts?.length}</h2>
        <h2>Total Price: ${price}</h2>
        <Link to="/dashboard/payment">
          <button className="btn">Pay Now</button>
        </Link>
      </div>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="text-xs uppercase text-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Class Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Instructor
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {carts &&
                carts.map((cls) => (
                  <tr
                    key={cls._id}
                    className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={cls?.imageURL}
                        alt={cls?.name}
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {cls?.name}
                        </div>
                      </div>
                    </th>
                    <th scope="row" className="px-6 py-4">
                      {cls?.price}
                    </th>
                    <th scope="row" className="px-6 py-4">
                      {cls?.instructorName}
                    </th>
                    <td className="px-6 py-4">
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
      )}
    </div>
  );
};

export default SelectedClasses;
