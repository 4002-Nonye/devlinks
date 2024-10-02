import { useForm } from 'react-hook-form';
import { IoIosLock, IoMdMail } from 'react-icons/io';

import Button from '../../ui/Button';
import Error from '../../ui/Error';
import Spinner from '../../ui/Spinner';
import { useSignup } from './useSignup';

function SignupForm() {
  const { signUp, isPending } = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  function onSubmit({ email, password }) {
    signUp(
      { email, password },
      {
        onSettled: reset,
      },
    );
  }
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
          className={`input ${errors.email && 'errorBorder'}`}
          type="text"
          name="email"
          id="email"
          placeholder=" e.g. alex@email.com"
          {...register('email', {
            required: `Can't be empty!`,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email!',
            },
          })}
        />
        <Error
          position="right-2 top-[2.6rem]"
          errMessage={errors?.email?.message}
        />
      </div>

      <div className="labelHolder">
        <label htmlFor="password" className="label">
          Create password
        </label>
        <IoIosLock className="absolute left-2 top-[2.85rem] text-lg text-brown-200" />
        <input
          disabled={isPending}
          className={`input ${errors.password && 'errorBorder'}`}
          type="password"
          name="password"
          id="password"
          placeholder="At least 8 characters"
          {...register('password', {
            required: `Can't be empty!`,
            minLength: {
              value: 8,
              message: 'At least 8 characters',
            },
          })}
        />
        <Error
          position="right-2 top-[2.6rem]"
          errMessage={errors?.password?.message}
        />
      </div>

      <div className="labelHolder">
        <label htmlFor="confirm-password" className="label">
          Confirm password
        </label>
        <IoIosLock className="absolute left-2 top-[2.85rem] text-lg text-brown-200" />
        <input
          disabled={isPending}
          className={`input ${errors.confirmPassword && 'errorBorder'}`}
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="At least 8 characters"
          {...register('confirmPassword', {
            required: `Can't be empty!`,
            validate: (value) =>
              value === getValues().password || 'Must match password',
          })}
        />{' '}
        <Error
          position="right-2 top-[2.6rem]"
          errMessage={errors?.confirmPassword?.message}
        />
        <span className="text-sm text-brown-200">
          Password must contain at least 8 characters
        </span>
      </div>

      <Button variant="signup">
        {' '}
        {isPending ? (
          <Spinner size="md" variant="hsl(0,0%,100%)" />
        ) : (
          'Create new account'
        )}
      </Button>
    </form>
  );
}

export default SignupForm;
