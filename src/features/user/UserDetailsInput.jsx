import { useUserProfile } from '../../contexts/UserContext';
import Error from '../../ui/Error';

function UserDetailsInput() {
  const {
    register,
    formState: { errors },
  } = useUserProfile();

  return (
    <div className="rounded-md bg-white-200 p-6 md:p-7">
      <div className="space-y-5">
        <div className="flexClass relative flex-col md:flex-row">
          <label htmlFor="firstName" className="labelClass">
            First name*
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="e.g John"
            className={`input px-3 md:w-[70%] ${errors.firstName && 'errorBorder'} caps`}
            {...register('firstName', {
              required: `Can't be empty`,
            })}
          />
          {errors.firstName && (
            <Error
              position=" absolute right-2 top-[.9rem]"
              errMessage={errors?.firstName?.message}
            />
          )}
        </div>

        <div className="flexClass relative flex-col md:flex-row">
          <label htmlFor="lastName" className="labelClass">
            Last name*
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="e.g Appleseed"
            className={`input px-3 md:w-[70%] ${errors.lastName && 'errorBorder'} caps`}
            {...register('lastName', {
              required: `Can't be empty`,
            })}
          />
          {errors.lastName && (
            <Error
              position=" absolute right-2 top-[.9rem]"
              errMessage={errors?.lastName?.message}
            />
          )}
        </div>

        <div className="flexClass relative flex-col md:flex-row">
          <label htmlFor="email" className="labelClass">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="e.g email@example.com"
            className={`input px-3 md:w-[70%] ${errors.email && 'errorBorder'}`}
            {...register('email', {
              required: `Can't be empty`,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please provide a valid email',
              },
            })}
          />
          {errors.email && (
            <Error
              position=" absolute right-2 top-[.9rem]"
              errMessage={errors?.email?.message}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetailsInput;
