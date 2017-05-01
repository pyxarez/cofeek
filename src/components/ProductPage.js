import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductPage.res/ProductPage.css';

export class ProductPage extends Component {
  state = {
    count: 1
  }

  render() {
    return (
      <section className={ styles.common }>
        holla
      </section>
    );
  }
}

ProductPage.propTypes = {
  productPage: PropTypes.shape({
    cost: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default ProductPage;