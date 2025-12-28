import { Link } from 'react-router-dom';

import LoginForm from '../features/authentication/LoginForm';
import Heading from '../ui/Heading';
import Logo from '../ui/Logo';

function Login() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center md:mt-36">
      <Logo />

      <div className="mt-16 w-[85%] md:w-[40%] xl:w-[28%]">
        <Heading purpose="login">
          Add your details below to get back into the app
        </Heading>
        <LoginForm />

        <p className="mt-5 text-center text-brown-200">
          Don&apos;t have an account?{' '}
          <Link className="font-medium text-blue" to="/signup">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
