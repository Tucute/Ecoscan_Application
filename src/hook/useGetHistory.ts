import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Url} from '../url/Url';
import useGetUser from './useGetUser';

const useGetHistory = () => {
  const {user} = useGetUser();
  console.log(user);
  
  const userId = user._id;

  const {data, isLoading, isError} = useQuery({
    queryKey: ['getHistory'],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `${Url}/history/getHistorybyId/${userId}`,
        );
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error('Lỗi: ', error);
        throw new Error("Lỗi rồi");
      }
    },
  });
  return {data, isLoading, isError};
};

export default useGetHistory;
