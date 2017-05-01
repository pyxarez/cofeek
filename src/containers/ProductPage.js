import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getProductData } from '../store/actions/ProductPageActions';

import ProductPage from '../components/ProductPage';

const mapStateToProps = ({ productPage }) => ({
  productPage
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    getProductData,
  }, dispatch)
});

const ProductPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);

export default ProductPageContainer;