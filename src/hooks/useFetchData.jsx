import {useCallback, useEffect, useState} from "react";
import axiosURL from "../axios/axiosURL";

const useFetchData = (url, stateValue = []) => {
  const [data, setData] = useState(stateValue);
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = useCallback(async () => {
    try {
      const response = await axiosURL.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchData();
  }, [fetchData, url]);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return {data, loading, refetch};
};

export default useFetchData;
