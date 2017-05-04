import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getProductData,
  increaseProductCount,
  decreaseProductCount,
  clearCounter,
} from '../store/actions/ProductPageActions';
import { addProductToCart } from '../store/actions/CartActions';

import ProductPage from '../components/ProductPage';

export class ProductPageContainer extends Component {
  static propTypes = {
    productPage: PropTypes.shape({
      category: PropTypes.string.isRequired,
      subcategory: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      hasReceivedData: PropTypes.bool.isRequired,
      errorMessage: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }),
    params: PropTypes.shape({
      category: PropTypes.string.isRequired,
      subcategory: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
    addProductToCart: PropTypes.func.isRequired,
    getProductData: PropTypes.func.isRequired,
  }

  addToCart = () => {
    const {
      id,
      name,
      cost,
      url,
      category,
      subcategory,
      count,
    } = this.props.productPage;
    const { clearCounter } = this.props;

    this.props.addProductToCart({
      id,
      name,
      cost,
      url,
      count,
      category,
      subcategory,
    }).then(() => clearCounter());
  }

  componentDidMount = () => {
    const {
      getProductData,
    } = this.props;
    const {
      category,
      subcategory,
      id
    } = this.props.params;
    
    getProductData({
      category,
      subcategory,
      id
    });
  }

  componentWillReceiveProps = nextProps => {
    const {
      getProductData,
    } = this.props;
    const {
      id
    } = this.props.params;

    if (nextProps.params.id !== id) {
      getProductData({
        category: nextProps.params.category,
        subcategory: nextProps.params.subcategory,
        id: nextProps.params.id
      });
    }
  }

  render() {
    const {
      params,
      productPage,
      increaseProductCount,
      decreaseProductCount
    } = this.props;

    return (
     <ProductPage
      params={ params }
      productData={ productPage }
      addToCart={ this.addToCart }
      increaseProductCount={ increaseProductCount }
      decreaseProductCount={ decreaseProductCount }/>
    );
  }
}

const mapStateToProps = ({ productPage }) => ({
  productPage,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    getProductData,
    addProductToCart,
    increaseProductCount,
    decreaseProductCount,
    clearCounter,
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPageContainer)