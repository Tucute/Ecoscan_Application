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
            const history = {
              userId: '65d6b7a042ef2f2889ee3637',
              barcodeNumber: Barcode.barcodeNumber,
            };
            console.log(history);
            
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
