import React from 'react';

import styles from './Banner.res/Banner.css';

const Banner = () => {
  return (
    <section className={styles.common}>
      <div className={styles.bannerWrapper}>
        <h1 className={styles.title}>Кофеёк</h1>
        <h2 className={styles.slogan}>Кофе - это важно</h2>
        <button className={styles.button}>О нас</button>
      </div>
    </section>
  );
};

export default Banner;