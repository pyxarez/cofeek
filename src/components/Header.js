import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import SearchBox from './SearchBox';

import styles from './Header.res/Header.css';

import burgerSVG from './Header.res/burger.min.svg';
import phoneSVG from './Header.res/phone.min.svg';
import cartSVG from './Header.res/cart.min.svg';

const Header = ({ menu, toggleMenuState, toggleCartState }) => {
  return (
    <header className={ styles.common }>
      <img src={ burgerSVG } onClick={toggleMenuState} className={ menu ?  styles.hidden : styles.visible } alt="menu"/>
      <Link className={ styles.logo } to='/home'/>
      <SearchBox/>
      <span className={ styles.phoneNumber }>
        <img src={ phoneSVG } className={ styles.phone } alt="phone"/>
        <a className={ styles.phoneLink } href='tel:88005553535'> 8 800 555-35-35</a>
      </span>
      <img src={ cartSVG } className={ styles.cart } onClick={ toggleCartState } alt="cart"/>
    </header>
  );
};

Header.propTypes = {
  menu: PropTypes.bool.isRequired,
  toggleMenuState: PropTypes.func.isRequired,
  toggleCartState: PropTypes.func.isRequired
}

export default Header;
