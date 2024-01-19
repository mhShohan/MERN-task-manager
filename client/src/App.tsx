import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// mui
import { CssBaseline, ThemeProvider } from '@mui/material';

//project import
import Loader from './components/Loader';
import privateRoutes from './routes/privateRoutes';
import publicRoutes from './routes/publicRoutes';
import theme from './theme/theme';
import { useAppSelector } from './store/hooks';
import { getUser } from './store/services/authSlice';

const App = () => {
  const user = useAppSelector(getUser);

  // if (isLoading) {
  //   return <Loader fullPage={true} />;
  // }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={false}
      />
      <RouterProvider router={user ? privateRoutes : publicRoutes} />
    </ThemeProvider>
  );
};

export default App;
