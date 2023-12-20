import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// mui
import { CssBaseline, LinearProgress, ThemeProvider } from '@mui/material';

//project import
import privateRoutes from './routes/privateRoutes';
import publicRoutes from './routes/publicRoutes';
import theme from './theme/theme';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { useEffect } from 'react';
import { getAuth } from './store/services/authSlice';

const App = () => {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAuth());
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }

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
      <RouterProvider router={isAuthenticated ? privateRoutes : publicRoutes} />
    </ThemeProvider>
  );
};

export default App;
