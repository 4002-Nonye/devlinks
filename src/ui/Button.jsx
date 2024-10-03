import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  customClass: PropTypes.string,
};

function Button({ children, variant, disabled, customClass='' }) {
  const baseStyles = 'rounded-md bg-blue p-3 font-medium text-white-100';
  const styles = {
    login: `${baseStyles} w-full `,
    signup: `${baseStyles} w-full `,
    save:` ${baseStyles} px-5 `
  };

  return (
    <button disabled={disabled} className={`${styles[variant]} ${customClass}`}>
      {children}
    </button>
  );
}

export default Button;
