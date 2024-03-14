import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetUser = () => {
    const {data} = useQuery({
        queryKey: ['getUser'],
        queryFn: () => {
            axios.get('https://6471cfab6a9370d5a41ab469.mockapi.io/user')
        }
    })
    console.log("data: ", data);
    return {data}
};

export default useGetUser;