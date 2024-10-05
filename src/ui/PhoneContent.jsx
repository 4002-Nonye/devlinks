import { Link } from 'react-router-dom';

import avatar from '../assets/justin.jpg';
import { useLinks } from '../contexts/LinksContext';
import Avatar from './Avatar';

function PhoneContent() {
  const { linksArr } = useLinks();
  return (
    <>
      <Avatar avatar={avatar} />

      <h3 className="py-3 font-bold text-2xl">Ben Wright</h3>
      <p className="font-light text-sm">ben@example.com</p>

      {linksArr?.map((link) => (
        <Link
          to={link.link}
          className={`bg-[${link.color}] p-2 my-2 text-sm tracking-wide text-white-100 rounded-md w-56 cursor-pointer mt-3 text-center`}
          key={link.id}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}

export default PhoneContent;
