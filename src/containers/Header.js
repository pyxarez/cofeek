import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import toggleMenuState from '../store/actions/MenuActions';
import { toggleCartState } from '../store/actions/CartActions';

import Header from '../components/Header';

const mapStateToProps = ({ menu }) => ({
  menu
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    toggleCartState,
    toggleMenuState,
  }, dispatch)
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;