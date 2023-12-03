import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Errors, Input } from '@/components';
import { login } from '../authActions.ts';
import type { LoginReq } from '../types';
import { useAppDispatch, useAppSelector } from '@/app/hooks.ts';

export function LoginPage() {
  const { loading, error, userInfo } = useAppSelector((state) => state.auth);
  const { register, handleSubmit } = useForm<LoginReq>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    userInfo && navigate('/');
  }, [userInfo, navigate]);

  const submitForm = (data: LoginReq) => dispatch(login(data));

  return (
    <main className="grid min-h-screen place-items-center">
      <form
        className="flex min-w-[24rem] flex-col gap-8 rounded-2xl border-4 p-4 shadow-2xl"
        onSubmit={handleSubmit(submitForm)}
      >
        <h1 className="text-center text-2xl font-bold">Sign in</h1>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="email">Email</label>
            <Input type="email" required {...register('email')} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Input type="password" required {...register('password')} />
          </div>
        </div>
        {error ? <Errors errors={error.message} /> : null}
        <Button type="submit" disabled={loading}>
          {loading ? 'Please wait...' : 'Sign in'}
        </Button>
        <NavLink to="/register" className="link self-center">
          Register
        </NavLink>
      </form>
    </main>
  );
}
