import React from 'react';
import PropTypes from 'prop-types';

import { auth } from '../firebaseApp';

import { Link } from 'react-router';

import loginSVG from './Menu.res/login.min.svg';
import profileSVG from './Menu.res/profile.min.svg';

import styles from './Menu.res/Menu.css';

const Menu = ({ menu, toggleMenuState }) => {
  const isAnonymous = auth.currentUser
    ? auth.currentUser.isAnonymous
    : true;

  return (
    <section className={menu ? styles.visible : styles.hidden}>
      { isAnonymous
          ? <Link to='/login' onClick={ toggleMenuState } className={ styles.topTitle }>
              <img className={ styles.topImage } src={ loginSVG } alt="login"/>
              Войти
            </Link>
          : <Link to='/profile' onClick={ toggleMenuState } className={ styles.topTitle }>
              <img className={ styles.topImage } src={ profileSVG } alt="profile"/>
              Профиль
            </Link> }

      <Link to='/home' onClick={toggleMenuState} className={styles.bigLink}>Домой</Link>
      <Link to='/shop/coffee/all' onClick={toggleMenuState} className={styles.bigLink}>Магазин</Link>
      <Link to='/about' onClick={toggleMenuState} className={styles.bigLink}>О нас</Link>

      <div className={styles.social}>
        <a className={styles.twitter} href="https://www.twitter.com"/>
        <a className={styles.instagram} href="https://www.instagram.com"/>
        <a className={styles.vk} href="https://www.vk.com"/>
        <a className={styles.facebook} href="https://www.facebook.com"/>
      </div>
    </section>
  );
};

Menu.propTypes = {
  menu: PropTypes.bool.isRequired,
  toggleMenuState: PropTypes.func.isRequired
}

export default Menu;