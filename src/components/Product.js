import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './Product.res/Product.css';

const Product = ({ addProductToCart, name, cost, url, id, category, subcategory }) => {
  return (
    <div className={styles.common}>
      <Link className={ styles.productLink } to={`/product/${category}/${subcategory}/${id}`} >
        <img src={url} alt='product'/>
        <h1 className={styles.productName}>{name}</h1>
        <span className={styles.productCost}>{cost}  руб.</span>
      </Link> 
      <span className={styles.addToCart} onClick={addProductToCart}>Добавить в корзину +</span>
    </div>
  );
};

Product.propTypes = {
  addProductToCart: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
}

export default Product;