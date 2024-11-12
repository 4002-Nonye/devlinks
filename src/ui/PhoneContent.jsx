import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import PropTypes from 'prop-types';

import { useLinks } from '../contexts/LinksContext';
import Avatar from './Avatar';
import Card from './Card';
import PlaceHolder from './PlaceHolder';

function PhoneContent({ purpose, content }) {
  const { userLinks, profileDetails = {}, isLoading } = content;
  const { linksArr } = useLinks();

  // Show loading placeholder if data is loading
  if (isLoading) return <PlaceHolder type="phoneContent" />;

  // Extract profile details with safe fallbacks
  const { firstName, lastName, email, avatar } = Array.isArray(profileDetails)
    ? profileDetails[0] || {}
    : profileDetails;

  // Determine which links to display based on purpose
  const linkToDisplay =
    purpose === 'preview' ? userLinks?.[0]?.userLinks || [] : linksArr || [];

  // Maximum number of link placeholders to display
  const maxLinksToShow = 5;

  return (
    <>
      <Avatar avatar={avatar} />

      <h3 className="pt-3 text-center text-lg font-bold capitalize">
        {firstName && lastName ? (
          `${firstName} ${lastName}`
        ) : (
          <PlaceHolder height="1rem" width="13rem" />
        )}
      </h3>

      <div className="mb-2 text-sm font-light">
        {email || (
          <PlaceHolder height=".6rem" width="5rem" customClass="mt-2" />
        )}
      </div>

      <div className="mt-5 h-72 overflow-scroll">
        <SortableContext
          items={linkToDisplay.map((link) => link.id)}
          strategy={verticalListSortingStrategy}
        >
          {linkToDisplay.slice(0, maxLinksToShow).map((link, index) => (
            <Card link={link} key={link.id || `link-${index}`} />
          ))}
          {/* Render additional links if there are more than the maxLinksToShow */}
          {linkToDisplay.slice(maxLinksToShow).map((link) => (
            <Card link={link} key={link.id} />
          ))}
        </SortableContext>

        {/* Render placeholder only if we're on the linkPage and have fewer links */}
        {purpose === 'linkPage' &&
          linkToDisplay.length < maxLinksToShow &&
          Array.from({ length: maxLinksToShow - linkToDisplay.length }).map(
            (_, index) => (
              <div
                key={`placeholder-${index}`}
                className="my-3 h-10 w-56 rounded-md bg-brown-100 p-2 text-center text-sm tracking-wide"
              />
            ),
          )}
      </div>
    </>
  );
}

PhoneContent.propTypes = {
  purpose: PropTypes.oneOf(['preview', 'linkPage']),
  content: PropTypes.shape({
    userLinks: PropTypes.array,
    profileDetails: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    isLoading: PropTypes.bool,
  }).isRequired,
};

export default PhoneContent;
