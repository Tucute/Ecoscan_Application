import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Url} from '../url/Url';

const useGetHistory = () => {
  const userId = '65d6b7a042ef2f2889ee3637';

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
