import { Link } from 'react-router-dom';

import SignupForm from '../features/authentication/SignupForm';
import Header from '../ui/Header';
import Heading from '../ui/Heading';

function Signup() {

  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <Header />

      <div className="mt-16 xl:w-[28%] md:w-[40%] w-[85%]">
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
