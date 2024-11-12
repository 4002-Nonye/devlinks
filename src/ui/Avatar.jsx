import PropTypes from 'prop-types';

Avatar.propTypes = {
  avatar: PropTypes.string,
};

function Avatar({ avatar }) {
  return (
    <div
      className={`relative h-24 w-24 rounded-full border-4 border-blue ${!avatar && 'border-0 bg-brown-100 bg-opacity-90'}`}
    >
      <img
        src={avatar || ''} // Use empty string to avoid broken image
        alt="User avatar"
        className={`h-full w-full rounded-full object-cover object-top ${!avatar && 'invisible'}`}
      />
    </div>
  );
}

export default Avatar;
