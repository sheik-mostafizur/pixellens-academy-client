import {useEffect, useState} from "react";
import axiosURL from "../axios/axiosURL";

const useFetchData = (url, stateValue = []) => {
  const [loadedData, setLoadedData] = useState(stateValue);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axiosURL.get(url);
      setLoadedData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData, url]);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return {loadedData, loading, refetch};
};

export default useFetchData;
