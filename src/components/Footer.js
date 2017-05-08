import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router';

import helpSVG from './Footer.res/info.svg'; 
import mailsSVG from './Footer.res/mails.svg'; 
import emailSVG from './Footer.res/Email.svg'; 
import logoSVG from '../assets/images/logo1.png';


import styles from './Footer.res/Footer.css';

const Footer = () => {
  return (
    <footer className={styles.common}>
      <span className={styles.scrollTop} onClick={ () => { window.scrollTo(0, 0); } }/>
      <div className={styles.wrapper}>
        <img className={styles.image} src={helpSVG} alt="help"/>
        Нужна помощь? Позвоните нам!
        <a className={styles.link} href='tel:8-800-555-35-35'> 8 800 555-35-35</a>
      </div>

      <div className={styles.wrapper}>
        <img className={styles.image} src={mailsSVG} alt="notifications"/>
        <span className={styles.text}>Будьте в курсе последних событий</span>
        <span className={styles.text}>Подписаться на рассылку</span>
        <div className={styles.textBox}>
          <input type="text" className={styles.mailInput}/>
          <button className={styles.mailButton}/>
        </div>
      </div>

      <div className={styles.wrapper}>
        <img className={styles.image} src={emailSVG}  alt="Email"/>
        Наша почта
        <a className={styles.link} href='mailto:pyxarez@gmail.com'>pyxarez@gmail.com</a>
      </div>

      <div className={styles.wrapper}>
        <img className={styles.logo} src={logoSVG} alt="logo"/>
        &copy; 2017 Кофеёк
        <Link className={styles.link} to='#'>Политика безопасности</Link>
      </div>
    </footer>
  );
};

export default Footer;