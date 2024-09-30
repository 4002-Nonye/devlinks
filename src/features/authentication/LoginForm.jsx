import {  useState } from 'react';
import { IoIosLock, IoMdMail } from 'react-icons/io';


import Button from '../../ui/Button';
import { useLogin } from './useLogin';
import { getCurrentUser } from '../../services/apiAuth';

function LoginForm() {
  const [email, setEmail] = useState('ojukwuchinonye70@gmail.com');
  const [password, setPassword] = useState('12345678');
  const { login, isPending } = useLogin();



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    login({ email, password },{
      onSettled:()=>{
        setEmail('')
        setPassword('')
      }
    });
    getCurrentUser()
  };

  return (
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

          autoComplete='username'
          placeholder=" e.g. alex@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="labelHolder">
        <label htmlFor="password" className="label">
          Password
        </label>
        <IoIosLock className="absolute left-2 top-[2.85rem] text-lg text-brown-200" />
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          autoComplete='current-password'
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button disabled={isPending} variant="login">{!isPending?'Login':'logging in'}</Button>
    </form>
  );
}

export default LoginForm;
