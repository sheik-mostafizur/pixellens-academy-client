import {useQuery} from "@tanstack/react-query";
import {uesAuthContext} from "../context/AuthContext";
import axios from "axios";

const useAdmin = () => {
  const {user, loading} = uesAuthContext();

  const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3001/users/admin/${user?.email}`
      );
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
