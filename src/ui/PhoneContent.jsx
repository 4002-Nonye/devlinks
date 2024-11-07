import PropTypes from 'prop-types';

import { useLinks } from '../contexts/LinksContext';
import Avatar from './Avatar';
import Card from './Card';
import PlaceHolder from './PlaceHolder';

function PhoneContent({ purpose, content }) {
  const { userLinks, profileDetails, isLoading } = content;
  const { linksArr } = useLinks();

  if (isLoading) return <PlaceHolder type="phoneContent" />;

  const { firstName, lastName, email, avatar } =
    profileDetails?.[0] || profileDetails;

  // Determine which links to display based on purpose
  const linkToDisplay =
    purpose === 'preview' ? userLinks?.[0]?.userLinks : linksArr;

  // Maximum number of link placeholders to display
  const maxLinksToShow = 5;

  return (
    <>
      <Avatar avatar={avatar} />

      <h3 className="pt-3 font-bold text-lg text-center capitalize">
        {firstName && lastName ? (
          `${firstName} ${lastName}`
        ) : (
          <PlaceHolder height="1rem" width="13rem" />
        )}
      </h3>

      <p className="font-light text-sm mb-2">
        {email || (
          <PlaceHolder height=".6rem" width="5rem" customClass="mt-2" />
        )}
      </p>

      <div className="h-72 overflow-scroll mt-7">
        {Array.from({ length: maxLinksToShow }, (_, index) => {
          const link = linkToDisplay?.[index]; // Get the link if it exists

          if (link) {
            return <Card link={link} key={link.id} />;
          } else if (purpose === 'linkPage') {
            // Show placeholder only if we are on the link page
            return (
              <div
                key={`placeholder-${index}`}
                className="bg-brown-100 p-2 h-10 my-3 text-sm tracking-wide rounded-md w-56 text-center"
              />
            );
          }

          return null; // remove placeholder if preview page
        })}

        {/* Render additional links if there are more than the maxLinksToShow */}
        {linkToDisplay?.slice(maxLinksToShow).map((link) => (
          <Card link={link} key={link.id} />
        ))}
      </div>
    </>
  );
}

PhoneContent.propTypes = {
  purpose: PropTypes.string,
  content: PropTypes.object,
};

export default PhoneContent;
