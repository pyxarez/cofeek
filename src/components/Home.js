import React from 'react';
import { Link } from 'react-router';
// import PropTypes from 'prop-types';

import Banner from './Banner';

import HomeProductsContainer from '../containers/HomeProducts';

import styles from './Home.res/Home.css';

const Home = () => {
  return (
    <main className={styles.common}>
      <Banner />
      <h1 className={styles.title}>Товары в нашем магазине</h1>
      <HomeProductsContainer count={6}/>
      <section className={styles.shopLinks}>
        <h1 className={styles.shopTitle}>~ Магазин ~</h1>
        <Link to='/shop/coffee/all' className={styles.shopLink}>Кофе</Link>
        <Link to='/shop/tea/all' className={styles.shopLink}>Чай</Link>
        <Link to='/shop/gear/all' className={styles.shopLink}>Принадлежности</Link>
      </section>
    </main>
  );
};

export default Home;