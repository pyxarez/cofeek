import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router';

import SearchBox from './SearchBox';

import styles from './Header.res/style.css';

import burgerSVG from './Header.res/burger.svg';
import logoSVG from './Header.res/logo.svg';
import phoneSVG from './Header.res/phone.svg';
import cartSVG from './Header.res/cart.svg';

const Header = ({ children }) => {
  return (
    <div className={styles.common}>
      <img src={burgerSVG} className={styles.burger} alt="menu"></img>
      <img src={logoSVG} className={styles.logo} alt="logo"/>
      <SearchBox/>
      <span className={styles.phoneNumber}>
        <img src={phoneSVG} className={styles.phone} alt="phone"/>
        8 800 555-35-35
      </span>
      <img src={cartSVG} className={styles.cart} alt="phone"/>
    </div>
  );
};
export default Header;