import LoaderSpinner from "../../../../components/LoaderSpinner";
import {uesAuthContext} from "../../../../context/AuthContext";
import useFetchData from "../../../../hooks/useFetchData";
import ShowInstructorData from "./ShowInstructorData";

const Instructor = () => {
  const {user: firebaseUser} = uesAuthContext();
  const {data: users} = useFetchData(`/users/`);
  const {data: instructorClasses, loading, refetch} = useFetchData(
    `admin/${firebaseUser?.email}/classes`
  );
  const newClassData = instructorClasses.reduce((acc, cls) => {
    const matchingUser = users.find((user) => user._id === cls.instructorId);
    if (matchingUser) {
      cls.instructorName = matchingUser.name;
      cls.instructorEmail = matchingUser.email;
    }
    acc.push(cls);
    return acc;
  }, []);

  return (
    <div>
      <h1>Instructor</h1>
      {loading ? (
        <LoaderSpinner />
      ) : (
        instructorClasses && (
          <ShowInstructorData instructorClasses={newClassData} refetch={refetch} />
        )
      )}
    </div>
  );
};

export default Instructor;
