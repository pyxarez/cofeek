import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Product from '../components/Product';

import { addProductToCart } from '../store/actions/CartActions';

class ProductContainer extends Component {
  static PropTypes = {
    addProductToCart: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }

  addProductToCart = () => {
    const {
      id,
      name,
      cost,
      url
    } = this.props;
    this.props.addProductToCart({
      id,
      name,
      cost,
      url,
      count: 1
    });
  }

  render() {
    return <Product {...this.props} addProductToCart={this.addProductToCart}/>
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ addProductToCart }, dispatch)
});

export default connect(null, mapDispatchToProps)(ProductContainer);