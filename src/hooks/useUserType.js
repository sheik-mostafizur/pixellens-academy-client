import {useQuery} from "@tanstack/react-query";

import axios from "axios";
import {uesAuthContext} from "../context/AuthContext";

const useUserType = () => {
  const {user, loading} = uesAuthContext();

  const {data: userType, isLoading: isUserTypeLoading} = useQuery(
    ["userType", user?.email],
    {
      enabled: !loading,
      queryFn: async () => {
        const response = await axios.get(
          `http://localhost:3001/users/user-type/${user?.email}`
        );
        return response.data.userType;
      },
    }
  );

  return [userType, isUserTypeLoading];
};

export default useUserType;
