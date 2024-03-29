import {useMutation, useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Url} from '../url/Url';
import useGetUser from './useGetUser';
import { useState } from 'react';
interface Code {
  barcodeNumber: number;
  condition: boolean;
}
const useGetProduct = ({navigation}: any) => {
  const {user} = useGetUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const mutationProduct = useMutation({
    mutationFn: async (Barcode: Code) => {
        axios
        .post(`${Url}/product/getProductByBarcode`, Barcode)
        .then(async res => {
          if (res.status === 200) {
            const history = {
              userId: user?._id,
              barcodeNumber: Barcode.barcodeNumber,
            };
            const data = res.data;
            if (Barcode.condition) {
              await axios.post(`${Url}/history/postHistory`, history)
              .then(() => {
                if (res.status === 200) {
                  console.log('Added history');
                }
              })
              .catch(e => {
                console.log(e.response.data.message);
                setIsError(true);
              });
            }
            setIsLoading(false);
            navigation.navigate('DetailProduct', {data});
          }
        })
        .catch(e => {
          console.log('No result: ', e.response.data.message);
          setIsLoading(false);
          setIsError(true);
        })
    },
  });
  const handleBarcode = (data: Code) => {
    mutationProduct.mutate(data);
  };
  return {handleBarcode, isLoading, setIsLoading, isError, setIsError};
};

export default useGetProduct;
