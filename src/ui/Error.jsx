import PropTypes from 'prop-types';

Error.propTypes = {
  position: PropTypes.string,
  errMessage: PropTypes.string,
};

function Error({ position = '', errMessage }) {
  return (
    <span className={` ${position} text-sm font-medium text-red`}>
      {errMessage}
    </span>
  );
}

export default Error;
