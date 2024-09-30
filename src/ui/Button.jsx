import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

function Button({ children, variant, disabled }) {
  const baseStyles = 'w-full rounded-md bg-blue p-3 font-medium text-white-100';
  const styles = {
    login: `${baseStyles}`,
    signup: `${baseStyles}`,
  };

  return (
    <button disabled={disabled} className={styles[variant]}>
      {children}
    </button>
  );
}

export default Button;
