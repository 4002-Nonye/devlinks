import { CgProfile } from 'react-icons/cg';
import { FaLink } from 'react-icons/fa6';
import { FiEye } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

import Logo from './Logo';

function Nav() {
  return (
    <nav className="flex justify-between items-center px-4 md:px-10 py-5 bg-white-100">
      <Logo size="md" position="nav" />
      <div className="flex gap-10">
        <NavLink
          to="links"
          className="nav-link inline-flex items-center gap-1 text-brown-200 font-bold"
        >
          <FaLink className=" text-xl md:text-lg" />

          <span className="hidden md:block">Links</span>
        </NavLink>

        <NavLink
          to="profile"
          className="nav-link inline-flex items-center gap-1 text-brown-200 font-bold"
        >
          <CgProfile className="text-xl md:text-lg" />

          <span className="hidden md:block">Profile Details</span>
        </NavLink>
      </div>

      <Link
        className="border-2 border-blue rounded-md flex justify-center items-center font-semibold px-4 md:px-7 text-blue py-2 hover:bg-blue hover:bg-opacity-15 "
        to="/links/preview"
      >
        <FiEye className="md:hidden" />
        <span className="hidden md:block">Preview</span>
      </Link>
    </nav>
  );
}

export default Nav;
