import { RouterProvider } from 'react-router-dom';
import publicRoutes from './routes/publicRoutes';

const App = () => {
  return <RouterProvider router={publicRoutes} />;
};

export default App;
