import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import toggleMenuState from '../store/actions/MenuActions';

import Header from '../components/Header';

const mapDispatchToProps = (dispatch) => ({
  toggleMenuState: bindActionCreators(toggleMenuState, dispatch)
});

const HeaderContainer = connect(
  null,
  mapDispatchToProps
)(Header);

export default HeaderContainer;