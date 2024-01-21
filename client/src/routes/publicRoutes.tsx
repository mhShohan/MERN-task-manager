import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project import
import withSuspense from '../components/HOC/withSuspense';
const LoginPage = withSuspense(lazy(() => import('../pages/LoginPage')));
const RegisterPage = withSuspense(lazy(() => import('../pages/RegisterPage')));
const AuthLayout = withSuspense(lazy(() => import('../layout/AuthLayout')));
const NotFoundPage = withSuspense(lazy(() => import('../pages/NotFoundPage')));

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
