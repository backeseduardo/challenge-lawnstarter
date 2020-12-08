import cls from 'classnames';
import PropTypes from 'prop-types';

function Button(props) {
  const { children, type, className, disabled, onClick } = props;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cls(
        'py-2 px-5 uppercase border rounded-3xl font-bold',
        'text-white text-sm focus:outline-none',
        {
          'border-gray-dark bg-gray-dark cursor-not-allowed': disabled,
          'border-green bg-green hover:bg-green-dark': !disabled,
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: undefined,
  type: 'button',
  className: undefined,
  disabled: false,
  onClick: undefined,
};

export default Button;
