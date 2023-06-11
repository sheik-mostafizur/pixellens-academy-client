import {useQuery} from "@tanstack/react-query";

import axiosURL from "../axios/axiosURL";
import {uesAuthContext} from "../context/AuthContext";

const useFetchUserDB = () => {
  const {user, loading} = uesAuthContext(); // Corrected typo in function name

  const {
    data: userDB,
    isLoading: isUserDBLoading,
    refetch,
  } = useQuery(
    ["user", user?.email || ""], // Added check for empty email
    {
      enabled: !loading && user?.email !== undefined, // Added check for undefined email
      queryFn: async () => {
        const response = await axiosURL.get(`/users/${user?.email}`);
        return response.data;
      },
    }
  );

  return [userDB, isUserDBLoading, refetch];
};

export default useFetchUserDB;
