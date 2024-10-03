import PropTypes from 'prop-types';

Heading.propTypes = {
  purpose: PropTypes.string,
  children: PropTypes.node,
};

function Heading({ purpose, children }) {
  return (
    <div className="mb-9 space-y-3">
      <h1 className="text-3xl font-bold text-black capitalize">{purpose}</h1>
      <p className="text-sm text-brown-200">{children}</p>
    </div>
  );
}

export default Heading;
