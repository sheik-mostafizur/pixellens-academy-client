import {useQuery} from "@tanstack/react-query";

import {uesAuthContext} from "../context/AuthContext";
import axiosURL from "../axios/axiosURL";

const useUserType = () => {
  const {user, loading} = uesAuthContext();

  const {data: userType, isLoading: isUserTypeLoading} = useQuery(
    ["userType", user?.email],
    {
      enabled: !loading,
      queryFn: async () => {
        const response = await axiosURL.get(`/user-type/${user?.email}`);
        return response.data.userType;
      },
    }
  );

  return [userType, isUserTypeLoading];
};

export default useUserType;
