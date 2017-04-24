import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router';

import { common, burger } from './Header.res/style.css';
import burgerSVG from './Header.res/burger.svg';
import logoSVG from './Header.res/logo.svg';

const Header = ({ children }) => {
  return (
    <div className={common}>
      <img src={burgerSVG} className={burger}></img>
      <img src={logoSVG} alt="logo"/>
    </div>
  );
};
export default Header;