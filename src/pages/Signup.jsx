import { Link } from 'react-router-dom';

import SignupForm from '../features/authentication/SignupForm';
import Heading from '../ui/Heading';
import Logo from '../ui/Logo';

function Signup() {
  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <Logo />

      <div className="mt-16 w-[85%] md:w-[40%] xl:w-[28%]">
        <Heading purpose="signup">
          Let&apos;s get you started sharing your links!
        </Heading>
        <SignupForm />

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
