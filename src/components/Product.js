import React from 'react';
import PropTypes from 'prop-types';

import styles from './Product.res/Product.css';

const Product = ({ name, cost, url, id }) => {
  return (
    <div className={styles.common}>
      <img src={url} alt='product'/>
      <h1 className={styles.productName}>{name}</h1>
      <span className={styles.productCost}>{cost}  руб.</span>
      <span className={styles.addToCart}>Добавить в корзину +</span>
    </div>
  );
};

Product.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
}

export default Product;