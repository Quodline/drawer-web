import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import type { RegisterReq } from '../auth';
import { register as registerAction } from '../authActions';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Input } from '@/components/ui/input';
import { Errors } from '@/components/Errors';
import { Button } from '@/components/ui/button';

export function RegisterForm() {
  const { loading, userInfo, error } = useAppSelector((state) => state.auth);
  const { register, handleSubmit } = useForm<RegisterReq>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    userInfo && navigate('/dashboard');
  }, [userInfo, navigate]);

  const submitForm = (data: RegisterReq) => dispatch(registerAction(data));

  return (
    <form
      className="flex min-w-[24rem] flex-col gap-8 rounded-2xl border border-gray-300 p-4"
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
  );
}
