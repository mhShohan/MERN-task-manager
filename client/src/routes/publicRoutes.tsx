import { createBrowserRouter } from 'react-router-dom';

// project import
import Login from '../pages/Login';
import AuthLayout from '../layout/AuthLayout';
import Register from '../pages/Register';

const publicRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '', element: <Login /> },
      { path: 'register', element: <Register /> }
    ]
  }
]);

export default publicRoutes;
