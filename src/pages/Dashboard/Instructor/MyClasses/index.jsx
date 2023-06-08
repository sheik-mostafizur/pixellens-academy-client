import {useEffect, useState} from "react";
import {uesAuthContext} from "../../../../context/AuthContext";
import LoaderSpinner from "../../../../components/LoaderSpinner";
import TableMyClasses from "./TableMyClasses";
import axiosURL from "../../../../axios/axiosURL";

const MyClasses = () => {
  const {user} = uesAuthContext();
  const [loading, setLoading] = useState(false);
  const [instructor, setInstructor] = useState({});
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    setLoading(true);
    axiosURL.get(`/users/${user?.email}`).then((response) => {
      setLoading(false);
      setInstructor(response.data);
    });
  }, [user?.email]);

  useEffect(() => {
    setLoading(true);
    axiosURL.get(`/classes/${instructor?._id}`).then(({data}) => {
      setClasses(data);
      setLoading(false);
    });
  }, [instructor?._id]);

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold md:text-5xl">My Classes</h1>
      {loading ? (
        <LoaderSpinner />
      ) : (
        classes && <TableMyClasses classes={classes} />
      )}
    </div>
  );
};

export default MyClasses;
