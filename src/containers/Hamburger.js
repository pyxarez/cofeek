import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import toggleMenuState from '../store/actions/MenuActions';

import Hamburger from '../components/Hamburger';

const mapStateToProps = ({ menu }) => ({
  active: menu
});

const mapDispatchToProps = dispatch => ({
  onClick: bindActionCreators(toggleMenuState, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);