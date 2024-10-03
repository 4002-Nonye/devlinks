import { Outlet } from 'react-router-dom';

import phone from '../assets/phone.svg';
import Nav from '../ui/Nav';

function DevLinks() {
  return (
    <>
      <Nav />

      <div className="grid lg:grid-cols-2 gap-4 mt-5">
        <div className="relative hidden bg-white-200 rounded-md  p-3  lg:flex justify-center items-center">
          <img src={phone} alt="" />
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DevLinks;
