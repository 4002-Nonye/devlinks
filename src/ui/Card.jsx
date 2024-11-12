import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import { getPlatformDetails } from '../utils/helper';

function Card({ link }) {
  const { id, platform } = link;

  // Destructure useSortable return values
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  // Get platform details 
  const platformDetails = getPlatformDetails(platform, <TbBrandGithubFilled />);

  // Define styles based on platform color and apply transformations
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: platformDetails.color,
    color: platformDetails.color === '#ffffff' ? '#000000' : '#ffffff',
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="touch-none p-2 my-3 text-sm tracking-wide rounded-md w-56 cursor-pointer mt-3 text-center border-[1.5px] border-opacity-25 border-brown-200 flex items-center justify-between"
    >
      <Link
        to={link.link}
        target="_blank"
        className="inline-flex items-center gap-2"
      >
        {platformDetails.icon} {platform}
      </Link>

      <span>
        <FaArrowRight className="text-[.7rem]" />
      </span>
    </div>
  );
}

Card.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
