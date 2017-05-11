import React from 'react';
import PropTypes from 'prop-types';

import Category from './Category';

import { coffee, tea, gear } from '../utils/categoryData';

import closePanel from '../assets/images/goBackArrow.min.svg'; 
import styles from './CategoryPanel.res/CategoryPanel.css';
import bg from '../assets/general.css';

const Categories = ({ toggleCategories, shop }) => {
  return (
    <section className={ shop.categoryPanelState ? bg.fillBgVisible : bg.fillBgHidden }>
      <div className={ shop.categoryPanelState ? styles.panelVisible : styles.panelHidden }>
        <h1 className={ styles.panelTitle }>
          Категории товаров
          <img className={ styles.closePanel } onClick={ toggleCategories } src={ closePanel } alt="close-panel"/>
        </h1>

        <Category
          toggleCategories={ toggleCategories }
          mainCategoryRoute='coffee'
          mainCategoryTitle='Кофе'
          nestedCategories={coffee}/>
        <Category
          toggleCategories={ toggleCategories }
          mainCategoryRoute='tea'
          mainCategoryTitle='Чай'
          nestedCategories={tea}/>
        <Category
          toggleCategories={ toggleCategories }
          mainCategoryRoute='gear'
          mainCategoryTitle='Принаждежности'
          nestedCategories={gear}/>
      </div>
    </section>
  );
};

Categories.propTypes = {
  toggleCategories: PropTypes.func.isRequired,
  shop: PropTypes.shape({
    categoryPanelState: PropTypes.bool.isRequired,
  })
};

export default Categories;