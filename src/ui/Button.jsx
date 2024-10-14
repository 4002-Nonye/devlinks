import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  customClass: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

function Button({
  children,
  variant,
  disabled,
  customClass = '',
  onClick,
  type,
}) {
  const baseStyles =
    'rounded-md bg-blue p-3 font-medium text-white-100 disabled:cursor-not-allowed';
  const styles = {
    login: `${baseStyles} w-full `,
    signup: `${baseStyles} w-full `,
    save: ` ${baseStyles} w-full md:w-[unset] `,
    share: ` ${baseStyles} w-[8rem]   `,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles[variant]} ${customClass}`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
