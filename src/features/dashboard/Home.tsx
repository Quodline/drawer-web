import { useAppDispatch, useAppSelector } from '@/app/hooks.ts';
import { useNavigate } from 'react-router-dom';
import { logout } from '@/features/auth/authActions.ts';

export function HomePage() {
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => dispatch(logout(navigate));

  return (
    <header className="m-4 mx-auto flex max-w-5xl justify-between rounded-lg bg-gray-100 p-4">
      <h1 className="text-bold">Logged in as {userInfo?.email}</h1>
      <nav className="flex gap-4">
        <button onClick={handleLogout} className="link">
          Logout
        </button>
      </nav>
    </header>
  );
}
