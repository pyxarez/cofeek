
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Products from '../components/Products';

import { listenToProducts } from '../store/actions/ProductsActions';
import { toArray } from '../utils/helpers';

export class ProductPageProductsContainer extends Component {
  static propTypes = {
    params: PropTypes.shape({
      category: PropTypes.string,
      subcategory: PropTypes.string,
    }).isRequired,
    products: PropTypes.shape({
      hasReceivedData: PropTypes.bool.isRequired,
      errorMessage: PropTypes.string.isRequired,
      data: PropTypes.object.isRequired,
    }),
    listenToProducts: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const {
      listenToProducts,
      params
    } = this.props;

    listenToProducts({
      category: params.category,
      subcategory: params.subcategory
    });
  }

  render() {
    const { products, params } = this.props;
    const newProducts = { ...products };

    if ( Object.keys(newProducts.data).length === 0
         || ~Object.keys(newProducts.data).indexOf('coffee') ) {
      newProducts.data = [];
    } else {
      newProducts.data = toArray(newProducts.data);
      newProducts.data = newProducts.data.filter(item => item.id !== params.id)
    }

    return <Products products={ newProducts } params={ params }/>
  }
}

const mapStateToProps = ({ products }) => ({
  products,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    listenToProducts,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageProductsContainer);