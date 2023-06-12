import {useQuery} from "@tanstack/react-query";

import axiosURL from "../axios/axiosURL";
import {uesAuthContext} from "../context/AuthContext";

const useUserType = () => {
  const {user, loading} = uesAuthContext(); // Corrected typo in function name

  const {data: userType, isLoading: isUserTypeLoading} = useQuery(
    ["userType", user?.email || ""], // Added check for empty email
    {
      enabled: !loading && user?.email !== undefined, // Added check for undefined email
      queryFn: async () => {
        try {
          const response = await axiosURL.get(`/user-type/${user?.email}`);
          return response.data.userType;
        } catch (error) {
          // Some time user-type url problem, I think when I refresh my website it's solved.
          window.location.reload();
        }
      },
    }
  );

  return [userType, isUserTypeLoading];
};

export default useUserType;
