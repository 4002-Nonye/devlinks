import { useForm } from 'react-hook-form';
import { IoIosLock, IoMdMail } from 'react-icons/io';

import Button from '../../ui/Button';
import Error from '../../ui/Error';
import Spinner from '../../ui/Spinner';
import { useLogin } from './useLogin';

// REGEX - /\S+@\S+\.\S+/

function LoginForm() {
  const { login, isPending } = useLogin();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data) {
    const { email, password } = data;
    login(
      { email, password },
      {
        onSettled: () => reset(),
      },
    );
  }

  // for developmental process
  function onError(error) {
    console.log(error);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="labelHolder">
        <label htmlFor="email" className="label">
          Email address
        </label>
        <IoMdMail className="text-md absolute left-2 top-[3.1rem] text-brown-200" />

        <input
          disabled={isPending}
          className={`input px-8 ${errors.email && 'errorBorder'}`}
          type="text"
          name="email"
          id="email"
          autoComplete="username"
          placeholder=" e.g. alex@email.com"
          {...register('email', {
            required: `Can't be empty!`,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'invalid email',
            },
          })}
        />
        {errors.email && (
          <Error
            position=" absolute right-2 top-[2.6rem]"
            errMessage={errors?.email?.message}
          />
        )}
      </div>
      <div className="labelHolder">
        <label htmlFor="password" className="label">
          Password
        </label>
        <IoIosLock className="absolute left-2 top-[2.85rem] text-lg text-brown-200" />
        <input
          disabled={isPending}
          className={`input px-8 ${errors.password && 'errorBorder'}`}
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
        {errors.password && (
          <Error
            position=" absolute right-2 top-[2.6rem]"
            errMessage={errors?.password?.message}
          />
        )}
      </div>
      <Button disabled={isPending} variant="login">
        {!isPending ? 'Login' : <Spinner size="md" variant="hsl(0,0%,100%)" />}
      </Button>
    </form>
  );
}

export default LoginForm;
