import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
// import AuthLayout from '../layout/AuthLayout';

const publicRoutes = createBrowserRouter([{ path: '/', element: <Login /> }]);

export default publicRoutes;
