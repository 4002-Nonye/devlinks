import PropTypes from 'prop-types';

import logo from '../assets/logo.svg';

Logo.propTypes = {
  size: PropTypes.string,
  position: PropTypes.string,
};
function Logo({ size, position }) {
  return (
    <h1
      className={`inline-flex items-center gap-2  font-extrabold  ${size ? 'text-2xl' : 'text-4xl'} `}
    >
      <img src={logo} alt="logo" />
    <span className={`${position==='nav'? 'hidden md:block':''}`}>devlinks</span>  
    </h1>
  );
}

export default Logo;
