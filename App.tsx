import Navigate from './src/navigation/Navigate';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import {useEffect, useState} from 'react';
// import AuthNavigate from './src/navigation/AuthNavigate';

const queryClient = new QueryClient();

const App = () => {
  // const [status, setStatus] = useState(false);
  // useEffect(() => {
  //   const getToken = async () => {
  //     const token = await GoogleSignin.getTokens();
  //     if (token) {
  //       setStatus(!status);
  //     }
  //   };
  //   // getToken();
  // }),[];
  return (
    <QueryClientProvider client={queryClient}>
      {/* {status? <AuthNavigate/>: <Navigate /> } */}
      <Navigate />
    </QueryClientProvider>
  );
};

export default App;
