import { RouterProvider } from 'react-router-dom';

// mui
import { CssBaseline } from '@mui/material';

//project import
import privateRoutes from './routes/privateRoutes';
// import publicRoutes from './routes/publicRoutes';

const App = () => {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={privateRoutes} />
    </>
  );
};

export default App;
