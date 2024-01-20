import { createBrowserRouter } from 'react-router-dom';

// project import
import SideBar from '../layout/SideBar';
import Homepage from '../pages/Homepage';
import Teams from '../pages/Teams';
import Tasks from '../pages/Tasks';
import Profile from '../pages/Profile';
import ProtectedRoute from '../layout/ProtectedRoute';

const privateRoutes = createBrowserRouter([
  {
    path: '/',
    element: <SideBar />,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoute>
            <Homepage />,
          </ProtectedRoute>
        ),
      },
      {
        path: '/teams',
        element: (
          <ProtectedRoute>
            <Teams />,
          </ProtectedRoute>
        ),
      },
      {
        path: '/tasks',
        element: (
          <ProtectedRoute>
            <Tasks />,
          </ProtectedRoute>
        ),
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <Profile />,
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default privateRoutes;
