import {useQuery} from "@tanstack/react-query";
import axiosURL from "../axios/axiosURL";
import useFetchUserDB from "./useFetchUserDB";

const useFetchEnrolledClassesDB = () => {
  const [userDB, isUserDBLoading] = useFetchUserDB();

  const {
    data: enrolledClassesDB = [],
    isLoading: isEnrolledClassesDBLoading,
    refetch,
  } = useQuery(["isEnrolledUser", userDB?._id || ""], {
    enabled: !isUserDBLoading && userDB?._id !== undefined,
    queryFn: async () => {
      try {
        const response = await axiosURL.get("/enrolled-classes", {
          params: {studentId: userDB?._id},
        });
        return response?.data;
      } catch (error) {
        if (error?.response?.status === 404) {
          // User not found, return an empty array or another appropriate value
          return [];
        }
        throw error;
      }
    },
  });

  return [enrolledClassesDB, isEnrolledClassesDBLoading, refetch];
};

export default useFetchEnrolledClassesDB;
