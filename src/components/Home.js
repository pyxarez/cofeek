import React from 'react';
import { Link } from 'react-router';
// import PropTypes from 'prop-types';

import Banner from './Banner';

import ProductsContainer from '../containers/Products';

import styles from './Home.res/Home.css';

const Home = () => {
  return (
    <main className={styles.common}>
      <Banner />
      <ProductsContainer />
      <section className={styles.shopLinks}>
        <h1 className={styles.shopTitle}>~ Магазин ~</h1>
        <Link to='shop' className={styles.shopLink}>Кофе</Link>
        <Link to='shop' className={styles.shopLink}>Чай</Link>
        <Link to='shop' className={styles.shopLink}>Принадлежности</Link>
      </section>
    </main>
  );
};

export default Home;