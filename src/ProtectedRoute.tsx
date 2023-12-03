import { useAppSelector } from '@/app/hooks.ts';
import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute() {
  const { userToken } = useAppSelector((state) => state.auth);

  return userToken ? <Outlet /> : <Navigate to="/login" />;
}
