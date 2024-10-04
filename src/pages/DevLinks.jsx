import { Outlet } from 'react-router-dom';

import phone from '../assets/phone.svg';
import Nav from '../ui/Nav';

function DevLinks() {
  return (
    <>
      <Nav />

      <div className="grid lg:grid-cols-2 gap-4 mt-4">
        <div className="relative hidden bg-white-100 rounded-md  p-3  lg:flex justify-center items-center">
          <img className="w-[17rem]" src={phone} alt="" />
        </div>

        <div className="bg-white-100 px-4 md:px-8 py-5 h-full rounded-md flex flex-col">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DevLinks;
