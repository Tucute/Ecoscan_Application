import {useMutation, useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Url} from '../url/Url';

interface Code {
  barcodeNumber: number;
}
const useGetProduct = ({navigation}: any) => {
  const mutationProduct = useMutation({
    mutationFn: async (Barcode: Code) => {
      axios
        .post(`${Url}/product/getProductByBarcode`, Barcode)
        .then(async res => {
          if (res.status === 200) {
            const data = res.data;
            navigation.navigate('DetailProduct', {data});
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
  });
  const handleBarcode = (data: Code) => {
    mutationProduct.mutate(data);
  };
  return {handleBarcode};
};

export default useGetProduct;
