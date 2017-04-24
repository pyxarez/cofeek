import React from 'react';

import styles from './Products.res/Products.css'
import typo from '../assets/typography.css';

const Products = () => {
  return (
    <section className={styles.common}>
      <h1 className={typo.bigTitle}>Товары в нашем магазине</h1>
    </section>
  );
};

export default Products;