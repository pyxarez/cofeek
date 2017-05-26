import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleCategories } from '../store/actions/ShopActions';

import Shop from '../components/Shop';

const mapStateToProps = ({ shop }) => ({
  shop
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    toggleCategories,
  }, dispatch)
});

const ShopContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);

export default ShopContainer;