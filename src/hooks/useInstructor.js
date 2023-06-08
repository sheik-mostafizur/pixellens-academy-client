import {useQuery} from "@tanstack/react-query";

import axios from "axios";
import {uesAuthContext} from "../context/AuthContext";

const useInstructor = () => {
  const {user, loading} = uesAuthContext();

  const {data: isInstructor, isLoading: isInstructorLoading} = useQuery(
    ["isInstructor", user?.email],
    {
      enabled: !loading,
      queryFn: async () => {
        const response = await axios.get(
          `http://localhost:3001/users/instructor/${user?.email}`
        );
        return response.data.instructor;
      },
    }
  );

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
