import { useUserProfile } from '../../contexts/UserContext';
import Error from '../../ui/Error';

function UserDetailsInput() {
  const {
    register,
    formState: { errors },
  } = useUserProfile();

  return (
    <div className="bg-white-200 p-6 md:p-7 rounded-md">
      <div className="space-y-5">
        <div className="flexClass flex-col md:flex-row  relative ">
          <label htmlFor="firstName" className="labelClass">
            First name*
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="e.g John"
            className={`input md:w-[70%] px-3 ${errors.firstName && 'errorBorder'} caps`}
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

        <div className="flexClass  flex-col md:flex-row relative">
          <label htmlFor="lastName" className="labelClass">
            Last name*
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="e.g Appleseed"
            className={`input md:w-[70%] px-3 ${errors.lastName && 'errorBorder'} caps`}
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

        <div className="flexClass  flex-col md:flex-row  relative ">
          <label htmlFor="email" className="labelClass">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="e.g email@example.com"
            className={`input md:w-[70%] px-3 ${errors.email && 'errorBorder'}`}
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
