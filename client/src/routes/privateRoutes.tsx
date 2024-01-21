import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project import
import withSuspense from '../components/HOC/withSuspense';
import ProtectedRoute from '../layout/ProtectedRoute';
import SideBar from '../layout/SideBar';
const Homepage = withSuspense(lazy(() => import('../pages/Homepage')));
const TeamPage = withSuspense(lazy(() => import('../pages/TeamPage')));
const TaskPage = withSuspense(lazy(() => import('../pages/TaskPage')));
const ProfilePage = withSuspense(lazy(() => import('../pages/ProfilePage')));

const privateRoutes = createBrowserRouter([
  {
    path: '/',
    element: <SideBar />,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/teams',
        element: (
          <ProtectedRoute>
            <TeamPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/tasks',
        element: (
          <ProtectedRoute>
            <TaskPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default privateRoutes;
