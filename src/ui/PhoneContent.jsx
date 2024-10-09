import { FaArrowRight } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import avatar from '../assets/justin.jpg';
import { useLinks } from '../contexts/LinksContext';
import { getPlatformDetails } from '../utils/helper';
import Avatar from './Avatar';

function PhoneContent() {
  const { linksArr } = useLinks();

  return (
    <>
      <Avatar avatar={avatar} />

      <h3 className="py-3 font-bold text-2xl">Ben Wright</h3>
      <p className="font-light text-sm">ben@example.com</p>

      {linksArr?.map((link) => {
        // get icon and color from options
        const { icon, color } = getPlatformDetails(
          link.platform,
          <TbBrandGithubFilled />,
        );
        return (
          <Link
            to={link.link}
            target="_blank"
            style={{ backgroundColor: color }}
            className="p-2 my-2 text-sm tracking-wide text-white-100 rounded-md w-56 cursor-pointer mt-3 text-center border-[1.5px] border-opacity-25 border-brown-200 flex items-center justify-between "
            key={link.id}
          >
            <span className="inline-flex items-center gap-2">
              {icon} {link.platform}
            </span>

            <span>
              <FaArrowRight />
            </span>
          </Link>
        );
      })}
    </>
  );
}

export default PhoneContent;
