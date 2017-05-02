import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Products from '../components/Products';

import { listenToProducts } from '../store/actions/ProductsActions';
import { transformToNotNestedArray } from '../utils/helpers';

export class HomeProductsContainer extends Component {
  static propTypes = {
    products: PropTypes.shape({
      hasReceivedData: PropTypes.bool.isRequired,
      errorMessage: PropTypes.string.isRequired,
      data: PropTypes.object.isRequired,
    }),
    listenToProducts: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.listenToProducts();
  }

  render() {
    const { products, count } = this.props;
    const newProducts = {...products};

    newProducts.data = transformToNotNestedArray(newProducts.data, 3);
    if (typeof count !== 'undefined') newProducts.data.length = count;

    return <Products products={newProducts}/>
  }
}

const mapStateToProps = ({ products }) => ({
  products,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ listenToProducts }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeProductsContainer);;