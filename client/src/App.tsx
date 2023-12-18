import { RouterProvider } from 'react-router-dom';

// mui
import { CssBaseline, LinearProgress, ThemeProvider } from '@mui/material';

//project import
import privateRoutes from './routes/privateRoutes';
import publicRoutes from './routes/publicRoutes';
import theme from './theme/theme';
import { useGetAuthQuery } from './store/features/authApi';

const App = () => {
  const { isLoading, data } = useGetAuthQuery();

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={data?.data?.isAuthenticated ? privateRoutes : publicRoutes} />
    </ThemeProvider>
  );
};

export default App;
