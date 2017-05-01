import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import CartProduct from '../components/CartProduct';

import {
  deleteProductFromCart,
  increaseItemCount,
  decreaseItemCount
} from '../store/actions/CartActions';

class CartProductContainer extends Component {
  static propTypes = {
    increaseItemCount: PropTypes.func.isRequired,
    deleteProductFromCart: PropTypes.func.isRequired,
    decreaseItemCount: PropTypes.func.isRequired,
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }

  deleteProduct = () => {
    const {
      id,
      name,
      cost,
      url,
      count
    } = this.props;
    this.props.deleteProductFromCart({
      id,
      name,
      cost,
      url,
      count
    });
  }

  increaseItemCount = () => {
    const {
      id,
      name,
      cost,
      url,
      count
    } = this.props;
    this.props.increaseItemCount({
      id,
      name,
      cost,
      url,
      count
    });
  }

  decreaseItemCount = () => {
    const {
      id,
      name,
      cost,
      url,
      count
    } = this.props;
    this.props.decreaseItemCount({
      id,
      name,
      cost,
      url,
      count
    });
  }

  render() {
    return <CartProduct
      {...this.props}
      deleteProduct={this.deleteProduct}
      increaseCount={this.increaseItemCount}
      decreaseCount={this.decreaseItemCount}/>
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    deleteProductFromCart,
    increaseItemCount,
    decreaseItemCount
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(CartProductContainer);
