import {useQuery} from "@tanstack/react-query";

import axiosURL from "../axios/axiosURL";
import useFetchUserDB from "./useFetchUserDB";

const useFetchEnrolledClassesDB = () => {
  const [userDB, isUserDBLoading] = useFetchUserDB();

  const {
    data: enrolledClassesDB,
    isLoading: isEnrolledClassesDBLoading,
    refetch,
  } = useQuery(["user", userDB?._id || ""], {
    enabled: !isUserDBLoading && userDB?._id !== undefined,
    queryFn: async () => {
      const response = await axiosURL.get("/enrolled-classes", {
        params: {studentId: userDB?._id},
      });
      return response.data;
    },
  });

  return [enrolledClassesDB, isEnrolledClassesDBLoading, refetch];
};

export default useFetchEnrolledClassesDB;
