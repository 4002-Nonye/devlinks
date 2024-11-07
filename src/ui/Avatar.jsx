import PropTypes from 'prop-types';

Avatar.propTypes = {
  avatar: PropTypes.string,
};

function Avatar({ avatar }) {
  return (
    <div
      className={`relative w-24 h-24 rounded-full border-4 border-blue ${!avatar && 'bg-brown-100 bg-opacity-90 border-0'}`}
    >
      <img
        src={avatar || ''} // Use empty string to avoid broken image
        alt="User avatar"
        className={`w-full h-full rounded-full object-cover object-top ${!avatar && 'invisible'}`}
      />
    </div>
  );
}

export default Avatar;
