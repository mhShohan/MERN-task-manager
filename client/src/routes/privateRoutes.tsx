import { createBrowserRouter } from 'react-router-dom';

// project import
import SideBar from '../layout/SideBar';

const privateRoutes = createBrowserRouter([
  {
    path: '/',
    element: <SideBar />
  }
]);

export default privateRoutes;
