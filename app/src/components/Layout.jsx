import PropTypes from 'prop-types';

function Layout(props) {
  const { children } = props;

  return (
    <div className="bg-gray h-full">
      <header className="bg-white h-13 flex items-center justify-center shadow mb-7">
        <h1 className="text-green text-lg font-bold">SWStarter</h1>
      </header>

      <div className="grid gap-7 grid-cols-12">{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default Layout;
