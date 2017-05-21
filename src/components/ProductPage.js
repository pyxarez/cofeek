import React from 'react';
import PropTypes from 'prop-types';

import AddedPanelContainer from '../containers/AddedPanel';
import ProductPageProductsContainer from '../containers/ProductPageProducts';

import increase from '../assets/images/add.min.svg';
import decrease from '../assets/images/delete.min.svg';

import styles from './ProductPage.res/ProductPage.css';

export const ProductPage = ({
  params,
  productData,
  addToCart,
  addToWishList,
  increaseProductCount,
  decreaseProductCount,
}) => {
  const {
    name,
    cost,
    count,
    description,
    url,
  } = productData;

  return (
    <section className={ styles.common }>
      <AddedPanelContainer/>
      <h1 className={ styles.productName }>{ name }</h1>
      <div className={ styles.wrapper }>
        <div className={ styles.imageHolder }>
          <img className={ styles.productImage } src={ url } alt="product"/>
        </div>

        <div className={ styles.content }>
          <span className={ styles.productCost }>{ cost }.00руб.</span>
          <p className={ styles.productDescription }>{ description }</p>
          <span>Полная стоимость покупки: <span className={ styles.fullCost }>{ cost * count }.00руб.</span></span>
          <div className={ styles.productCounter }>
            Количество
            <img className={ styles.buttonIncrease } onClick={ increaseProductCount } src={ increase } alt=""/>
            { count }
            <img className={ styles.buttonDecrease } onClick={ decreaseProductCount } src={ decrease } alt=""/>
          </div>
          <div className={ styles.productButtons }>
            <button className={ styles.addToCartButton } onClick={ addToCart }>Добавить в корзину</button>
            <button className={ styles.addToWishListButton } onClick={ addToWishList }>В список желаемого</button>
          </div>
        </div>
      </div>
      <h2 className={ styles.similarProductsTitle}>Похожие товары</h2>
      <ProductPageProductsContainer params={ params }/>
    </section>
  );
}

ProductPage.propTypes = {
  productData: PropTypes.shape({
    cost: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  addToWishList: PropTypes.func.isRequired,
  increaseProductCount: PropTypes.func.isRequired,
  decreaseProductCount: PropTypes.func.isRequired,
  params: PropTypes.shape({
    category: PropTypes.string.isRequired,
    subcategory: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
}

export default ProductPage;
