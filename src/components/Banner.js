import React from 'react';
import { Link } from 'react-router';

import styles from './Banner.res/Banner.css';

const Banner = () => {
  return (
    <section className={ styles.common }>
      <div className={ styles.bannerWrapper }>
        <h1 className={ styles.title }>Кофеёк</h1>
        <h2 className={ styles.slogan }>Кофе - это важно</h2>
        <Link className={ styles.aboutLink } to='/about'>О нас</Link>
      </div>
    </section>
  );
};

export default Banner;