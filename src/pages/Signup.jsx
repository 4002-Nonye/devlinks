import { IoIosLock, IoMdMail } from 'react-icons/io';
import { Link } from 'react-router-dom';

import Button from '../ui/Button';
import Header from '../ui/Header';
import Heading from '../ui/Heading';

function Signup() {
  const handleSubmit = () => {
    console.log('submitted');
  };
  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <Header />

      <div className="mt-16 xl:w-[28%] md:w-[40%] w-[85%]">
       
        <Heading purpose="signup">
          Let&apos;s get you started sharing your links!
        </Heading>
        <form onSubmit={handleSubmit}>
          <div className="labelHolder">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <IoMdMail className="text-md absolute left-2 top-[3.1rem] text-brown-200" />
            <input
              className="input"
              type="text"
              name="email"
              id="email"
              placeholder=" e.g. alex@email.com"
            />
          </div>

          <div className="labelHolder">
            <label htmlFor="password" className="label">
              Create password
            </label>
            <IoIosLock className="absolute left-2 top-[2.85rem] text-lg text-brown-200" />
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="At least 8 characters"
            />
          </div>

          <div className="labelHolder">
            <label htmlFor="confirm-password" className="label">
              Confirm password
            </label>
            <IoIosLock className="absolute left-2 top-[2.85rem] text-lg text-brown-200" />
            <input
              className="input"
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="At least 8 characters"
            />{' '}
            <span className="text-sm text-brown-200">
              Password must contain at least 8 characters
            </span>
          </div>

          <Button variant="signup">Create new account</Button>
        </form>

        <p className="mt-5 text-center text-brown-200">
          Already have an account?{' '}
          <Link className="font-medium text-blue" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
