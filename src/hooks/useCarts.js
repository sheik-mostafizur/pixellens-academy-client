import {useQuery} from "@tanstack/react-query";
import axiosURL from "../axios/axiosURL";
import {uesAuthContext} from "../context/AuthContext";

const useCarts = () => {
  const {user} = uesAuthContext();
  const {
    data: carts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const {data} = await axiosURL.get(`/carts/${user?.email}`);
      return data;
    },
  });

  return {carts, refetch, isLoading};
};

export default useCarts;
