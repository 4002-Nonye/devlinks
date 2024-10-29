import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import { useLinks } from '../contexts/LinksContext';
import { getPlatformDetails } from '../utils/helper';
import Avatar from './Avatar';

function PhoneContent({ purpose, content }) {
  const { userLinks, profileDetails, isLoading } = content;

  const { linksArr } = useLinks();

  if (isLoading) return 'loading';

  const { firstName, lastName, email, avatar } =
    profileDetails?.[0] || profileDetails;

  // I dont want to show links that are not saved in preview page
  const linkToDisplay =
    purpose === 'preview' ? userLinks?.[0].userLinks : linksArr;

  return (
    <>
      <Avatar avatar={avatar} />

      <h3 className="pt-2 font-bold text-lg text-center capitalize">
        {firstName} {lastName}
      </h3>
      <p className="font-light text-sm">{email}</p>

      <div className="h-72 overflow-scroll">
        {linkToDisplay?.map((link) => {
          // get icon and color from options
          const { icon, color: bgColor } = getPlatformDetails(
            link.platform,
            <TbBrandGithubFilled />,
          );
          return (
            <Link
              to={link.link}
              target="_blank"
              style={{
                backgroundColor: bgColor,
                color: bgColor === '#ffffff' ? '#000000' : '#ffffff',
              }}
              className="p-2 my-3 text-sm tracking-wide rounded-md w-56 cursor-pointer mt-3 text-center border-[1.5px] border-opacity-25 border-brown-200 flex items-center justify-between "
              key={link.id}
            >
              <span className="inline-flex items-center gap-2">
                {icon} {link.platform}
              </span>

              <span>
                <FaArrowRight className="text-[.7rem]" />
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}

PhoneContent.propTypes = {
  purpose: PropTypes.string,
  content: PropTypes.object,
};

export default PhoneContent;
