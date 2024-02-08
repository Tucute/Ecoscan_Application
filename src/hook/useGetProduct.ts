import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetUser = () => {
    const {data} = useQuery({
        queryKey: ['getPrduct'],
        queryFn: () => {
            axios.get('https://6471cfab6a9370d5a41ab469.mockapi.io/products')
        }
    })
    return {data}
};

export default useGetUser;