import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosLock, IoMdMail } from 'react-icons/io';

import { getCurrentUser } from '../../services/apiAuth';
import Button from '../../ui/Button';
import { useLogin } from './useLogin';

// REGEX - /\S+@\S+\.\S+/

function LoginForm() {
  const { login, isPending } = useLogin();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();




  function onSubmit(data) {
    const { email, password } = data;
    if (!email || !password) return;

    login({ email, password });
  }
  function onError(error) {
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="labelHolder">
        <label htmlFor="email" className="label">
          Email address
        </label>
        <IoMdMail className="text-md absolute left-2 top-[3.1rem] text-brown-200" />

        <input
          className={`input ${errors.email&& 'errorBorder'}`}
          type="text"
          name="email"
          id="email"
          autoComplete="username"
          placeholder=" e.g. alex@email.com"
          {...register('email', {
            required: `Can't be empty!`,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid email',
            },
          })}
        />
        <span className="absolute right-2 top-[2.6rem] text-red text-sm font-medium">
          {errors?.email && errors.email.message}
        </span>
      </div>
      <div className="labelHolder">
        <label htmlFor="password" className="label">
          Password
        </label>
        <IoIosLock className="absolute left-2 top-[2.85rem] text-lg text-brown-200" />
        <input
        className={`input ${errors.password&& 'errorBorder'}`}
          type="password"
          name="password"
          id="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          {...register('password', {
            required: 'Please check again',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          })}
        />
        <span className="absolute right-2 top-[2.6rem] text-red text-sm font-medium">
          {errors?.password && errors.password.message}
        </span>
      </div>
      <Button disabled={isPending} variant="login">
        {!isPending ? 'Login' : 'logging in'}
      </Button>
    </form>
  );
}

export default LoginForm;
