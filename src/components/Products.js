import React from 'react';
import PropTypes from 'prop-types';

import ProductContainer from '../containers/Product';

import styles from './Products.res/Products.css'

const Products = ({ products }) => {
  return (
    <section className={styles.common}>
      <h1 className={styles.title}>Товары в нашем магазине</h1>
      {products.data.map(product =>
        <ProductContainer
          key={product.id}
          id={product.id} 
          name={product.name}
          url={product.url}
          cost={product.cost}/>)}
    </section>
  );
};

Products.PropTypes = {
  products: PropTypes.shape({
    hasReceivedData: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
  })
}

export default Products;