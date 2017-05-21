import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProfileSettings from '../components/ProfileSettings';

import { saveEmailAndName, savePassword } from '../store/actions/ProfilePageActions';

const mapStateToProps = ({ profilePage }) => ({
  errorMessage: profilePage.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    saveEmailAndName,
    savePassword,
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(ProfileSettings);
