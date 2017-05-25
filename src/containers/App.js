import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import toggleMenuState from '../store/actions/MenuActions';

import App from '../components/App';

const mapStateToProps = ({ menu }) => ({
  menu
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    toggleMenuState,
  }, dispatch)
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;