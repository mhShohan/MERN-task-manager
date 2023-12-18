import { createBrowserRouter } from 'react-router-dom';

// project import
import SideBar from '../layout/SideBar';
import Homepage from '../pages/Homepage';

const privateRoutes = createBrowserRouter([
  {
    path: '/',
    element: <SideBar />,
    children: [
      {
        path: '/homepage',
        element: <Homepage />
      }
    ]
  }
]);

export default privateRoutes;
