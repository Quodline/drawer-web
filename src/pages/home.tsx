import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store.ts';

export function HomePage() {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    userInfo || navigate('/login');
  }, [navigate, userInfo]);

  return <main>{userInfo?.email}</main>;
}
