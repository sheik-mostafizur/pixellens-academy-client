import {useQuery} from "@tanstack/react-query";

import axios from "axios";
import {uesAuthContext} from "../context/AuthContext";

const useAdmin = () => {
  const {user, loading} = uesAuthContext();

  const {data: isAdmin, isLoading: isAdminLoading} = useQuery(
    ["isAdmin", user?.email],
    {
      enabled: !loading,
      queryFn: async () => {
        const response = await axios.get(
          `http://localhost:3001/users/admin/${user?.email}`
        );
        return response.data.admin;
      },
    }
  );

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
