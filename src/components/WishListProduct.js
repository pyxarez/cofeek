import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import styles from './WishListProduct.res/WishListProduct.css';

const WishListProduct = ({
  name,
  cost,
  url,
  addToCart,
  removeFromWishList
}) => (
  <section className={ styles.container }>
    <img className={ styles.productPicture } src={ url } alt="product"/>
    <div className={ styles.content }>
      <h1 className={ styles.productName }>{ name }</h1>
      <p className={ styles.productCostWrapper }>Цена: <span className={ styles.productCost }>{ cost } руб.</span></p>
      <Button onClick={ addToCart } text='Добавить в корзину'/>
      <span className={ styles.deleteItem } onClick={ removeFromWishList }>Удалить</span>
    </div>
  </section>
);

WishListProduct.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromWishList: PropTypes.func.isRequired,
}

export default WishListProduct;