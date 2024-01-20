import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project import
import Loadable from '../components/Loadable';
const LoginPage = Loadable(lazy(() => import('../pages/LoginPage')));
const RegisterPage = Loadable(lazy(() => import('../pages/RegisterPage')));
const AuthLayout = Loadable(lazy(() => import('../layout/AuthLayout')));
const NotFoundPage = Loadable(lazy(() => import('../pages/NotFoundPage')));

const publicRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);

export default publicRoutes;
