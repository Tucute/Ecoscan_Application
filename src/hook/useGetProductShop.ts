import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Url } from '../url/Url';

const useGetProductShop = (shopId: string) => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['getProductShop'],
        queryFn: async () => {
            try {
                const res = await axios.get(`${Url}/shop/getDataProductByShopId/${shopId}`)
                return res.data.data;
            } catch (error) {
                console.log(error);
            }
        }
    })
    return {data, isLoading, isError};
};

export default useGetProductShop;