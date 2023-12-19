import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

// mui
import { CssBaseline, LinearProgress, ThemeProvider } from '@mui/material';

//project import
import privateRoutes from './routes/privateRoutes';
import publicRoutes from './routes/publicRoutes';
import theme from './theme/theme';
import { useGetAuthQuery } from './store/features/authApi';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const { isLoading, data } = useGetAuthQuery();

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
      <RouterProvider router={data?.data?.isAuthenticated ? privateRoutes : publicRoutes} />
    </ThemeProvider>
  );
};

export default App;
