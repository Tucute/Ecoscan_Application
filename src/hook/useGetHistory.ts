import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Url } from '../url/Url';
import useGetUser from './useGetUser';

const useGetHistory = () => {
  const { user } = useGetUser();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(`${Url}/history/getHistorybyId/${user._id}`);
        if (response.status === 200) {
          setData(response.data);
        } else if (response.status === 204) {
          setData(null);
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.error('Lỗi: ', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [user]);

  return { data, isLoading, isError };
};

export default useGetHistory;