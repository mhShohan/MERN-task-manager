import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

// mui
import { CssBaseline } from '@mui/material';

//project import
import { store } from './store/store';
import privateRoutes from './routes/privateRoutes';
// import publicRoutes from './routes/publicRoutes';

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <RouterProvider router={privateRoutes} />
    </Provider>
  );
};

export default App;
