import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  customClass: PropTypes.string,
  onClick:PropTypes.func
};

function Button({ children, variant, disabled, customClass='',onClick }) {
  const baseStyles = 'rounded-md bg-blue p-3 font-medium text-white-100 disabled:cursor-not-allowed';
  const styles = {
    login: `${baseStyles} w-full `,
    signup: `${baseStyles} w-full `,
    save:` ${baseStyles} px- w-full md:w-[unset] `
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${styles[variant]} ${customClass}`}>
      {children}
    </button>
  );
}

export default Button;
