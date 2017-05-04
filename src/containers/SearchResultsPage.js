import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchResultsPage from '../components/SearchResultsPage';

import { listenToProducts } from '../store/actions/ProductsActions';

import { matchString } from '../utils/searchHelpers';
import { transformToNotNestedArray } from '../utils/helpers';

export class SearchResultsPageContainer extends Component {
  static propTypes = {
    products: PropTypes.shape({
      hasReceivedData: PropTypes.bool.isRequired,
      errorMessage: PropTypes.string.isRequired,
      data: PropTypes.object.isRequired,
    }).isRequired,
    params: PropTypes.shape({
      query: PropTypes.string.isRequired,
    }),
  }

  componentDidMount = () => {
    this.props.listenToProducts();
  }

  componentWillReceiveProps = nextProps => {
    const {
      listenToProducts,
      params
    } = this.props;

    if (nextProps.params.query !== params.query) {
      listenToProducts();
    }
  }

  render() {
    const { products, params } = this.props;
    const newProducts = { ...products };

    if ( Object.keys(newProducts.data).length !== 0 ) {
      newProducts.data = transformToNotNestedArray(newProducts.data, 3);
      newProducts.data = newProducts.data.filter(product => matchString(product.name, params.query));
    } else {
      newProducts.data = [];
    }

    return (
      <SearchResultsPage products={ newProducts }/>
    );
  }
}

const mapStateToProps = ({ products }) => ({
  products
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    listenToProducts,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsPageContainer);