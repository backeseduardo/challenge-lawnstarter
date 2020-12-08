import cls from 'classnames';
import PropTypes from 'prop-types';

function Panel(props) {
  const { children, className, style } = props;

  return (
    <div
      className={cls('bg-white shadow rounded p-7 flex flex-col', className)}
      style={style}
    >
      {children}
    </div>
  );
}

Panel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

Panel.defaultProps = {
  className: undefined,
  style: undefined,
};

export default Panel;
