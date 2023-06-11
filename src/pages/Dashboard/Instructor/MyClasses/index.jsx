import {useEffect, useState} from "react";
import LoaderSpinner from "../../../../components/LoaderSpinner";
import TableMyClasses from "./TableMyClasses";
import axiosURL from "../../../../axios/axiosURL";
import useFetchUserDB from "../../../../hooks/useFetchUserDB";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";

const MyClasses = () => {
  const [userDB, isUserDBLoading] = useFetchUserDB();

  const [loading, setLoading] = useState(false);

  const [classes, setClasses] = useState([]);

  const totalEnrolled = classes.reduce((acc, total) => {
    return acc + total?.enrolled;
  }, 0);

  useEffect(() => {
    setLoading(true);
    axiosURL.get(`/instructor-classes/${userDB?._id}`).then(({data}) => {
      setClasses(data);
      setLoading(false);
    });
  }, [userDB?._id]);
  if (!classes?.length > 0)
    return (
      <>
        {loading ? (
          <LoaderSpinner />
        ) : (
          <>
            <h1 className="py-8 text-center text-3xl font-bold text-red-600 md:text-5xl">
              My Classes Empty!
            </h1>
            <Link to="/dashboard/add-class">
              <button className="btn mx-auto block">Add a new class</button>
            </Link>
            <Helmet>
              <title>My Classes | PixelLens Academy</title>
            </Helmet>
          </>
        )}
      </>
    );
  return (
    <div>
      <Helmet>
        <title>My Classes | PixelLens Academy</title>
      </Helmet>
      <h1 className="mb-8 text-center text-3xl font-bold md:text-5xl">
        My Classes Total Enrolled: {totalEnrolled}
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
