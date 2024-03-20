import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Url } from '../url/Url';

const useGetRecycleInstruction = (categoryId: string) => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['getProductShop'],
        queryFn: async () => {
            try {
                const res = await axios.get(`${Url}/product/getRecycle/${categoryId}`)
                return res.data.data;
            } catch (error) {
                console.log(error);
            }
        }
    })
    return {data, isLoading, isError};
};

export default useGetRecycleInstruction;