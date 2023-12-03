import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/hooks.ts';
import { Button } from '@/components';
import { logout } from '@/features/auth/authActions.ts';

export function HomePage() {
  const { userInfo } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <main>
      <h1 className="text-lg font-bold">{userInfo?.email}</h1>
      <Button onClick={handleLogout}>Log out</Button>
    </main>
  );
}
