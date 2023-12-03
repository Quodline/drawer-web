import { useAppSelector } from '@/app/hooks.ts';
import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute() {
  const { userInfo } = useAppSelector((state) => state.auth);

  return userInfo ? <Outlet /> : <Navigate to="/login" />;
}
