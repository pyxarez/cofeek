import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Products from '../components/Products';

import { listenToProducts } from '../store/actions/ShopActions';
import { toArray, transformToNotNestedArray } from '../utils/helpers';

export class ShopProductsContainer extends Component {
  static propTypes = {
    params: PropTypes.shape({
      category: PropTypes.string,
      subcategory: PropTypes.string,
    }).isRequired,
    shop: PropTypes.shape({
      categoryPanelState: PropTypes.bool.isRequired,
      hasReceivedData: PropTypes.bool.isRequired,
      errorMessage: PropTypes.string.isRequired,
      data: PropTypes.object.isRequired,
    }).isRequired,
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

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextProps.shop.data === this.props.shop.data) return false;
    return true;
  }

  componentWillReceiveProps = (nextProps) => {
    const {
      listenToProducts,
      params
    } = this.props;

    if ( nextProps.params.category !== params.category
         || nextProps.params.subcategory !== params.subcategory ) {
      listenToProducts({
        category: nextProps.params.category,
        subcategory: nextProps.params.subcategory
      });
    }
  }

  render() {
    const { shop, params } = this.props;
    const newShop = { ...shop };

    if ( Object.keys(newShop.data).length === 0 ) {
      newShop.data = [];
    } else {
      if (params.subcategory === 'all') {
        newShop.data = transformToNotNestedArray(newShop.data, 2);
      } else {
        newShop.data = transformToNotNestedArray(newShop.data, 1);
      }
    }

    return <Products products={ newShop }/>
  }
}

const mapStateToProps = ({ shop }) => ({
  shop,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ listenToProducts }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopProductsContainer);