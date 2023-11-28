import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Button, Errors, Input } from '@/components';
import { RootState, useAppDispatch } from '@/lib/store.ts';
import type { LoginReq } from '@/types/auth/login-req';
import { register as registerAction } from '@/features/auth/authActions.ts';
import { useNavigate } from 'react-router-dom';

export function RegisterPage() {
  const { loading, error, userInfo } = useSelector(
    (state: RootState) => state.auth,
  );
  const { register, handleSubmit } = useForm<LoginReq>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    userInfo && navigate('/');
  }, [navigate, userInfo]);

  const submitForm = (data: LoginReq) => {
    dispatch(registerAction(data));
  };

  return (
    <main className="grid min-h-screen place-items-center">
      <form
        className="flex min-w-[24rem] flex-col gap-8 rounded-2xl border-4 p-4 shadow-2xl"
        onSubmit={handleSubmit(submitForm)}
      >
        <h1 className="text-center text-2xl font-bold">Register</h1>
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
          {loading ? 'Please wait...' : 'Sign up'}
        </Button>
      </form>
    </main>
  );
}
