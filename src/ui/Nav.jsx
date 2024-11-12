import { CgProfile } from 'react-icons/cg';
import { FaLink } from 'react-icons/fa6';
import { FiEye } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

import Logo from './Logo';

function Nav() {
  return (
    <nav className="flex items-center justify-between bg-white-100 px-4 py-5 md:px-10">
      <Logo size="md" position="nav" />
      <div className="flex gap-10">
        <NavLink
          to="links"
          className="nav-link inline-flex items-center gap-1 font-bold text-brown-200"
        >
          <FaLink className="text-xl md:text-lg" />

          <span className="hidden md:block">Links</span>
        </NavLink>

        <NavLink
          to="profile"
          className="nav-link inline-flex items-center gap-1 font-bold text-brown-200"
        >
          <CgProfile className="text-xl md:text-lg" />

          <span className="hidden md:block">Profile Details</span>
        </NavLink>
      </div>

      <Link
        className="flex items-center justify-center rounded-md border-2 border-blue px-4 py-2 font-semibold text-blue hover:bg-blue hover:bg-opacity-15 md:px-7"
        to="/links/preview"
      >
        <FiEye className="md:hidden" />
        <span className="hidden md:block">Preview</span>
      </Link>
    </nav>
  );
}

export default Nav;
