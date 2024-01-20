import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project import
import Loadable from '../components/Loadable';
import ProtectedRoute from '../layout/ProtectedRoute';
import SideBar from '../layout/SideBar';
const Homepage = Loadable(lazy(() => import('../pages/Homepage')));
const TeamPage = Loadable(lazy(() => import('../pages/TeamPage')));
const TaskPage = Loadable(lazy(() => import('../pages/TaskPage')));
const ProfilePage = Loadable(lazy(() => import('../pages/ProfilePage')));

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
