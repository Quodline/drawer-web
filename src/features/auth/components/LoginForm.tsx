import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../authActions.ts';
import type { LoginReq } from '../auth';
import { useAppDispatch, useAppSelector } from '@/app/hooks.ts';
import { Input } from '@/components/ui/input.tsx';
import { Errors } from '@/components/Errors.tsx';
import { Button } from '@/components/ui/button.tsx';

export function LoginForm() {
  const { loading, error, userInfo } = useAppSelector((state) => state.auth);
  const { register, handleSubmit } = useForm<LoginReq>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    userInfo && navigate('/dashboard');
  }, [userInfo, navigate]);

  const submitForm = (data: LoginReq) => dispatch(login(data));

  return (
    <form
      className="flex min-w-[24rem] flex-col gap-8 rounded-2xl border border-gray-300 p-4"
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
    </form>
  );
}
