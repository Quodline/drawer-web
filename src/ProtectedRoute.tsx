import { useAppSelector } from '@/app/hooks.ts';
import { NavLink, Outlet } from 'react-router-dom';

export function ProtectedRoute() {
  const { userInfo } = useAppSelector((state) => state.auth);

  if (!userInfo) {
    return (
      <main className="my-8 flex flex-col items-center gap-8 p-8">
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to="/login">Login</NavLink> to gain access
        </span>
      </main>
    );
  }

  return <Outlet />;
}
