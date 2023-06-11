import {useEffect, useState} from "react";
import LoaderSpinner from "../../../../components/LoaderSpinner";
import TableMyClasses from "./TableMyClasses";
import axiosURL from "../../../../axios/axiosURL";
import useFetchUserDB from "../../../../hooks/useFetchUserDB";

const MyClasses = () => {
  const [userDB, isUserDBLoading] = useFetchUserDB();

  const [loading, setLoading] = useState(false);

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    setLoading(true);
    axiosURL.get(`/instructor-classes/${userDB?._id}`).then(({data}) => {
      setClasses(data);
      setLoading(false);
    });
  }, [userDB?._id]);

  return (
    <div>
      <h1 className="mb-8 text-center text-3xl font-bold md:text-5xl">
        My Classes
      </h1>
      {loading && isUserDBLoading ? (
        <LoaderSpinner />
      ) : (
        classes && <TableMyClasses classes={classes} />
      )}
    </div>
  );
};

export default MyClasses;
