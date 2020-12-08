import cls from 'classnames';
import PropTypes from 'prop-types';

function Input(props) {
  const { name, placeholder, className, value, onChange } = props;

  return (
    <input
      type="text"
      className={cls(
        'text-sm font-bold p-2-5 border border-gray-dark rounded shadow-inner',
        'focus:outline-none focus:border-gray-darker',
        className
      )}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: undefined,
  className: undefined,
};

export default Input;
