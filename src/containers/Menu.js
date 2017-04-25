import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import toggleMenuState from '../store/actions/MenuActions';

import Menu from '../components/Menu';

const mapStateToProps = ({ menu }) => ({
  menu
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenuState: bindActionCreators(toggleMenuState, dispatch)
});

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

export default MenuContainer;
