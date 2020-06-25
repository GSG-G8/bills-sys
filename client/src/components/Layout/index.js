import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import NavBar from './NavBar';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <NavBar />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
export { Header, NavBar };
