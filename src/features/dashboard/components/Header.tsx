import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/Logo';
import { logout } from '@/features/auth/authActions';
import { useAppDispatch, useAppSelector } from '@/app/hooks';

export function Header() {
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => dispatch(logout(navigate));

  return (
    <header className="flex items-center justify-between border-b border-gray-300 p-4">
      <Logo />
      <div className="flex flex-col">
        <h1 className="text-bold border-b text-right">
          Logged in as{' '}
          <strong className="text-gray-600">{userInfo?.email}</strong>
        </h1>
        <nav className="flex justify-end gap-4">
          <button onClick={handleLogout} className="link">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}
