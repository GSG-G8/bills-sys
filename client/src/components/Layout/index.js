import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import NavBar from './NavBar';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="mx-auto lg:w-4/5 w-11/12 md:pt-10 pt-4">{children}</div>
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
