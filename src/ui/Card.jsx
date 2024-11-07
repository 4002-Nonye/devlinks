import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import { getPlatformDetails } from '../utils/helper';

function Card({ link }) {
  return (
    <Link
      to={link.link}
      target="_blank"
      style={{
        backgroundColor: getPlatformDetails(
          link.platform,
          <TbBrandGithubFilled />,
        ).color,
        color:
          getPlatformDetails(link.platform, <TbBrandGithubFilled />).color ===
          '#ffffff'
            ? '#000000'
            : '#ffffff',
      }}
      className="p-2 my-3 text-sm tracking-wide rounded-md w-56 cursor-pointer mt-3 text-center border-[1.5px] border-opacity-25 border-brown-200 flex items-center justify-between"
      key={link.id}
    >
      <span className="inline-flex items-center gap-2">
        {getPlatformDetails(link.platform, <TbBrandGithubFilled />).icon}{' '}
        {link.platform}
      </span>

      <span>
        <FaArrowRight className="text-[.7rem]" />
      </span>
    </Link>
  );
}

Card.propTypes = {
  link: PropTypes.object,
};

export default Card;
