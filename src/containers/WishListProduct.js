import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addProductToCart } from '../store/actions/CartActions';
import { removeItemFromWishList } from '../store/actions/ProfilePageActions';

import WishListProduct from '../components/WishListProduct';

export class WishListProductContainer extends Component {
  static propTypes = {
    addProductToCart: PropTypes.func.isRequired,
    removeItemFromWishList: PropTypes.func.isRequired,
    product: PropTypes.shape({
      category: PropTypes.string.isRequired,
      subcategory: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }
  addToCart = () => {
    const {
      product,
    } = this.props;

    this.props.addProductToCart({ ...product })
      .then(this.removeFromWishList);
  }

  removeFromWishList = () => {
    const {
      product,
      removeItemFromWishList
    } = this.props;

    removeItemFromWishList(product);
  }

  render() {
    const {
      name,
      cost,
      url
    } = this.props.product;

    return (
      <WishListProduct
        name={ name }
        cost={ cost }
        url={ url }
        addToCart={ this.addToCart }
        removeFromWishList={ this.removeFromWishList }/>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    addProductToCart,
    removeItemFromWishList,
  }, dispatch),
});

export default connect(null, mapDispatchToProps)(WishListProductContainer);