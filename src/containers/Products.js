import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Products from '../components/Products';

import { listenToProducts } from '../store/actions/ProductsActions';
import { transformToNotNestedArray } from '../utils/helpers';

export class ProductsContainer extends Component {
  static PropTypes = {
    products: PropTypes.shape({
      hasReceivedData: PropTypes.bool.isRequired,
      errorMessage: PropTypes.string.isRequired,
      products: PropTypes.object.isRequired,
    }),
    listenToProducts: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.listenToProducts();
  }

  render() {
    const { products } = this.props;
    const newProducts = {...products};
    newProducts.data = transformToNotNestedArray(newProducts.data);
    newProducts.data.length = 6;

    return <Products products={newProducts}/>
  }
}

const mapStateToProps = ({ products }) => ({
  products,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ listenToProducts }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);;