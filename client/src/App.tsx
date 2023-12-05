import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

// mui
import { CssBaseline, ThemeProvider } from '@mui/material';

//project import
import { store } from './store/store';
import privateRoutes from './routes/privateRoutes';
import theme from './theme/theme';
import publicRoutes from './routes/publicRoutes';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={privateRoutes ? privateRoutes : publicRoutes} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
