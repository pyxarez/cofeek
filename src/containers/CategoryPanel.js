import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleCategories } from '../store/actions/ShopActions';

import CategoryPanel from '../components/CategoryPanel';

const mapStateToProps = ({ shop }) => ({
  shop
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    toggleCategories,
  }, dispatch)
});

const CategoryPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPanel);

export default CategoryPanelContainer;