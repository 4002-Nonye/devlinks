import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import phone from '../assets/phone.svg';
import { useLinks } from '../contexts/LinksContext';
import { useUserLinks } from '../features/links/useUserLinks';
import Nav from '../ui/Nav';
import PhoneContent from '../ui/PhoneContent';

function DevLinks() {
  const { handleGetLinks } = useLinks();
  const { userLinks } = useUserLinks();

  useEffect(() => {
    const links = () => {
      handleGetLinks(userLinks);
    };

    links();
  }, [userLinks]);
  return (
    <>
      <Nav />

      <div className="grid lg:grid-cols-2 gap-4 mt-4 items-start">
        <div className="relative hidden bg-white-100 h-full rounded-md  p-3  lg:flex justify-center">
          <div className="flex flex-col items-center relative z-10 top-12 w-48">
            <PhoneContent />
          </div>
          <img className="w-[17rem] absolute top-0 " src={phone} alt="" />
        </div>

        <div className="bg-white-100 px-4 md:px-8 py-5 h-full rounded-md flex flex-col">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DevLinks;
