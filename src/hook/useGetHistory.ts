import {useMutation, useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Url} from '../url/Url';

const useGetHistory = () => {
  const idUser = '65d6b7a042ef2f2889ee3637';

  const mutationHistory = useMutation({
    mutationFn: async () => {
      axios.post(`${Url}/history/getHistorybyId`, idUser)
      .then(res => {
        if (res.status === 200) {
            console.log('data get:', res.data);
            return res.data.data;
        }
      })
      .catch(e => {
        console.log(e.response.data.message);
      });
    },
  });

  mutationHistory.mutate();
  console.log('history', history);
  return {history};
};


export default useGetHistory;
