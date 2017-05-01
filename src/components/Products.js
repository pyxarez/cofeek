import React from 'react';
import PropTypes from 'prop-types';

import ProductContainer from '../containers/Product';

import styles from './Products.res/Products.css'

const Products = ({ products }) => {
  return (
    <section className={styles.common}>
      {products.data.map(product =>
        <ProductContainer
          key={product.id}
          id={product.id} 
          name={product.name}
          url={product.url}
          cost={product.cost}
          category={product.category}
          subcategory={product.subcategory}/>)}
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.shape({
    hasReceivedData: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
  })
}

export default Products;