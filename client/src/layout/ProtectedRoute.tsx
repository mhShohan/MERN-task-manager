import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

//project import
import { getCurrentUser } from '../store/services/authSlice';
import { useAppSelector } from '../store/hooks';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(getCurrentUser);

  if (!user) return <Navigate to="/login" replace={true} />;

  return children;
};

export default ProtectedRoute;
