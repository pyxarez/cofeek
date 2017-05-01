import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';

import closeSVG from '../assets/images/close.svg';
import loginSVG from './Menu.res/login.svg';

import styles from './Menu.res/Menu.css';

const Menu = ({ menu, toggleMenuState }) => {
  return (
    <section className={menu ? styles.visible : styles.hidden}>
      <img className={styles.close} onClick={toggleMenuState} src={closeSVG} alt="close"/>

      <Link to='login' className={styles.loginTitle}>
        <img className={styles.login} src={loginSVG} alt="login"/>
        Войти
      </Link>

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