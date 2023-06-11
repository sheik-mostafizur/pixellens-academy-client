import {Helmet} from "react-helmet-async";
import LoaderSpinner from "../../../../components/LoaderSpinner";
import useFetchEnrolledClassesDB from "../../../../hooks/useFetchEnrolledClassesDB";

const EnrolledClasses = () => {
  const [enrolledClassesDB, isEnrolledClassesDBLoading] =
    useFetchEnrolledClassesDB();

  if (!enrolledClassesDB?.length > 0)
    return (
      <>
        <h1 className="py-8 text-center text-3xl font-bold text-red-600 md:text-5xl">
          Enrolled Classes Empty!
        </h1>
        <Helmet>
          <title>Enrolled Classes Empty | PixelLens Academy</title>
        </Helmet>
      </>
    );
  return (
    <div>
      <Helmet>
        <title>Enrolled Classes | PixelLens Academy</title>
      </Helmet>
      <h2 className="mb-8 flex items-center justify-between gap-4 text-3xl font-bold text-primary-800">
        Total Enrolled: {enrolledClassesDB?.length}
      </h2>
      {isEnrolledClassesDBLoading ? (
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
                  Instructor id
                </th>
                <th scope="col" className="px-6 py-3">
                  Available Seats
                </th>
                <th scope="col" className="px-6 py-3">
                  Students
                </th>
              </tr>
            </thead>

            <tbody>
              {enrolledClassesDB &&
                enrolledClassesDB.map((cls) => (
                  <tr
                    key={cls._id}
                    className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={cls?.imageURL}
                        alt={cls?.className}
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {cls?.className}
                        </div>
                      </div>
                    </th>
                    <th scope="row" className="px-6 py-4">
                      {cls?.price}
                    </th>
                    <th scope="row" className="px-6 py-4">
                      {cls?.instructorId}
                    </th>
                    <td className="px-6 py-4">{cls?.availableSeats}</td>
                    <td className="px-6 py-4">{cls?.enrolled}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EnrolledClasses;
