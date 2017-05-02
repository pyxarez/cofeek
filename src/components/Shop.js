import React from 'react';
import PropTypes from 'prop-types';

import ShopProductsContainer from '../containers/ShopProducts';
import CategoryPanelContainer from '../containers/CategoryPanel';
import AddedPanelContainer from '../containers/AddedPanel';

import styles from './Shop.res/Shop.css';

const Shop = ({ categoryPanelState, toggleCategories, params }) => {
  return (
    <section className={ styles.common }>
      <AddedPanelContainer />
      <header className={ styles.header }>
        <button className={ styles.categoriesOpener } onClick={ toggleCategories }>Категории</button>
        <h1 className={ styles.title }>Магазин</h1>
        <span className={ styles.sort }></span>
      </header>
      <ShopProductsContainer params={params}/>
      <CategoryPanelContainer/>
    </section>
  );
};

Shop.propTypes = {
  shop: PropTypes.shape({
    categoryPanelState: PropTypes.bool.isRequired,
  }),
  toggleCategories: PropTypes.func.isRequired,
  params: PropTypes.shape({
    category: PropTypes.string,
    subcategory: PropTypes.string,
  }),
};

export default Shop;