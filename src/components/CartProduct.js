import React from 'react';
import PropTypes from 'prop-types';

// import toggleCart from '../store/actions/CartActions';

import addSVG from './CartProduct.res/add.svg';
import deleteSVG from './CartProduct.res/delete.svg';
import closeSVG from '../assets/images/close.svg';

import styles from './CartProduct.res/CartProduct.css';

const CartProduct = ({
  cost,
  count,
  name,
  url,
  increaseCount,
  decreaseCount,
  deleteItem,
  toggleCart
}) => {
  return (
    <div className={styles.common}>
      <img className={styles.productPicture}src={url} alt="product"/>
      <div className={styles.container}>
        <span className={styles.productName}>{name}</span>
        <div className={styles.controlElems}>
          <img className={styles.increaser} src={addSVG} onClick={increaseCount} alt="increaseCount"/>
          <span>{count}</span>
          <img className={styles.decreaser} src={deleteSVG} onClick={decreaseCount} alt="decreaseCount"/>
          <span>{cost}.00 руб.</span>
        </div>
      </div>
      <img className={styles.deleteItem} src={closeSVG} onClick={deleteItem} alt="deleteItem"/>
    </div>
  );
};

CartProduct.PropTypes = {
  id: PropTypes.number.isRequired,
  cost: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,  
  url: PropTypes.string.isRequired,
  increaseCount: PropTypes.func,
  decreaseCount: PropTypes.func,
  deleteItem: PropTypes.func,
  toggleCart: PropTypes.func
}

export default CartProduct;