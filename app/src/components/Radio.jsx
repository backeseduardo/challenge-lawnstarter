import PropTypes from 'prop-types';

function Radio(props) {
  const { name, label, className, value, onChange, selected } = props;

  const generatedElementId = `${name}-${value}`;

  return (
    <div className={className}>
      <input
        type="radio"
        id={generatedElementId}
        name={name}
        value={value}
        onChange={onChange}
        checked={selected === value}
      />

      <label className="font-bold ml-2" htmlFor={generatedElementId}>
        {label}
      </label>
    </div>
  );
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

Radio.defaultProps = {
  className: undefined,
};

export default Radio;
