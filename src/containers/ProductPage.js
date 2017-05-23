import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getProductData,
  increaseProductCount,
  decreaseProductCount,
  clearCounter,
  addProductToWishList,
} from '../store/actions/ProductPageActions';
import { openSuccessPanel } from '../store/actions/SuccessPanelActions';
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
    addProductToWishList: PropTypes.func.isRequired,
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
    const { clearCounter, openSuccessPanel } = this.props;

    this.props.addProductToCart({
      id,
      name,
      cost,
      url,
      count,
      category,
      subcategory,
    })
      .then( () => openSuccessPanel(2000) )
      .then(() => clearCounter())
      .catch(error => console.log(error));
  }

  addToWishList = () => {
    const {
      id,
      name,
      cost,
      url,
      category,
      subcategory,
      count,
    } = this.props.productPage;
    const {
      openSuccessPanel
    } = this.props;

    this.props.addProductToWishList({
      id,
      name,
      cost,
      url,
      category,
      subcategory,
      count,
    })
      .then(() => openSuccessPanel(2000))
      .catch(error => console.log(error));
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
      addToWishList={ this.addToWishList }
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
    addProductToWishList,
    openSuccessPanel,
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPageContainer)