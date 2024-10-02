import PropTypes from 'prop-types';

Spinner.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
};

function Spinner({ size, variant }) {
  const spinnerSize = size ? 'w-7 h-7' : 'w-24 h-24';

  const spinnerStyle = {
    background: `radial-gradient(farthest-side, ${variant} 94%, transparent) top/10px 10px no-repeat,
      conic-gradient(transparent 10%, ${variant})`,
    WebkitMask:
      'radial-gradient(farthest-side, transparent calc(100% - 10px), black 0)',
    mask: 'radial-gradient(farthest-side, transparent calc(100% - 5px), black 0)',
  };

  return (
    <div
      className={`mx-auto aspect-square animate-spin rounded-full ${spinnerSize}`}
      style={spinnerStyle}
    ></div>
  );
}

export default Spinner;
