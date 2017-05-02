import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Product from '../components/Product';

import {
  addProductToCart,
  toggleAddedPanelState
} from '../store/actions/CartActions';

class ProductContainer extends Component {
  static propTypes = {
    addProductToCart: PropTypes.func.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    subcategory: PropTypes.string.isRequired,
  }

  addProductToCart = () => {
    const {
      id,
      name,
      cost,
      url,
      category,
      subcategory,
    } = this.props;
    this.props.addProductToCart({
      id,
      name,
      cost,
      url,
      count: 1,
      category,
      subcategory,
    })
  }

  render() {
    return <Product { ...this.props } addProductToCart={ this.addProductToCart }/>
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    addProductToCart,
    toggleAddedPanelState
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(ProductContainer);