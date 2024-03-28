import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Url } from '../url/Url';
import { Alert } from 'react-native';

const useDeleteHistory = () => {
    const useDeleteHistory = useMutation({
        mutationFn: async (id: String) => {
            return await axios.delete(`${Url}/history/deletedHistory/${id}`);
        }
    })
    const handleDeleteHistory = (historyId: String) => {
        useDeleteHistory.mutate(historyId);
        Alert.alert('Success', 'Xóa thành công')
    }
    return {handleDeleteHistory}
};

export default useDeleteHistory;