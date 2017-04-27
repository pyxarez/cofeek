import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from './SearchBox';

import styles from './Header.res/Header.css';

import burgerSVG from './Header.res/burger.svg';
import phoneSVG from './Header.res/phone.svg';
import cartSVG from './Header.res/cart.svg';
import logoSVG from '../assets/images/logo.svg';

const Header = ({ menu, toggleMenuState, toggleCartState }) => {
  return (
    <header className={styles.common}>
      <img src={burgerSVG} onClick={toggleMenuState} className={menu ? styles.hidden : styles.visible} alt="menu"/>
      <img src={logoSVG} className={styles.logo} alt="logo"/>
      <SearchBox/>
      <span className={styles.phoneNumber}>
        <img src={phoneSVG} className={styles.phone} alt="phone"/>
        <a className={styles.phoneLink} href='tel:8-800-555-35-35'> 8 800 555-35-35</a>
      </span>
      <img src={cartSVG} className={styles.cart} onClick={toggleCartState} alt="cart"/>
    </header>
  );
};

Header.PropTypes = {
  menu: PropTypes.bool.isRequired,
  toggleMenuState: PropTypes.func.isRequired,
  toggleCartState: PropTypes.func.isRequired
}

export default Header;
