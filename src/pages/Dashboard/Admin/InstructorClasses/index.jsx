import LoaderSpinner from "../../../../components/LoaderSpinner";
import {uesAuthContext} from "../../../../context/AuthContext";
import useFetchData from "../../../../hooks/useFetchData";
import ShowInstructorData from "./ShowInstructorData";

const Instructor = () => {
  const {user: firebaseUser} = uesAuthContext();
  const {data: users} = useFetchData(`/users/`);
  const {
    data: instructorClasses,
    loading,
    refetch,
  } = useFetchData(`admin/${firebaseUser?.email}/classes`);

  const classesLength = {approvedCount: 0, pendingCount: 0, deniedCount: 0};

  const newClassData = instructorClasses.reduce((acc, cls) => {
    const matchingUser = users.find((user) => user._id === cls.instructorId);
    if (matchingUser) {
      cls.instructorName = matchingUser.name;
      cls.instructorEmail = matchingUser.email;

      if (cls.status == "approved") {
        classesLength.approvedCount++;
      } else if (cls.status == "pending") {
        classesLength.pendingCount++;
      } else if (cls.status == "denied") {
        classesLength.deniedCount++;
      }
    }
    acc.push(cls);
    return acc;
  }, []);

  return (
    <div>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <>
          <div className="mb-8 flex items-center justify-between text-3xl">
            <h2 className="mr-2 rounded bg-green-100 px-4 py-2 font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
              Approved <span>{classesLength?.approvedCount}</span>
            </h2>
            <h2 className="mr-2 rounded bg-yellow-100 px-4 py-2 font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
              Pending <span>{classesLength?.pendingCount}</span>
            </h2>
            <h2 className="mr-2 rounded bg-red-100 px-4 py-2 font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
              Denied <span>{classesLength?.deniedCount}</span>
            </h2>
          </div>
          {instructorClasses && (
            <ShowInstructorData
              instructorClasses={newClassData}
              refetch={refetch}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Instructor;
