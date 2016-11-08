import React, { PropTypes } from 'react';

function Layout({ children }) {
  return (
    <div>
      <h1>Hello, world!!!</h1>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Layout;
