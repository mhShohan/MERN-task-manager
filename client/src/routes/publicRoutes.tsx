import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import AuthLayout from '../layout/AuthLayout';
import Register from '../pages/Register';
// import AuthLayout from '../layout/AuthLayout';

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
