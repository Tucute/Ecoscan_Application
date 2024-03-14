import {useMutation, useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Url} from '../url/Url';
import useGetUser from './useGetUser';
interface Code {
  barcodeNumber: number;
}
const useGetProduct = ({navigation}: any) => {
  const {user} = useGetUser();
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
            axios.post(`${Url}/history/postHistory`, history)
            .then(async () => {
              if (res.status === 200) {
                navigation.navigate('DetailProduct', {data});
              }
            })
            .catch(e => {
              console.log(e.response.data.message);
            });
          }
        })
        .catch(e => {
          console.log(e.response.data.message);
        })
    },
  });
  const handleBarcode = (data: Code) => {
    mutationProduct.mutate(data);
  };
  return {handleBarcode};
};

export default useGetProduct;
