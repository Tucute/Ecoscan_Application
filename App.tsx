import Navigate from './src/navigation/Navigate';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Navigate />
    </QueryClientProvider>
  );
};

export default App;
``