import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProfileSettings from '../components/ProfileSettings';

import { saveEmailAndName } from '../store/actions/ProfilePageActions';

const mapStateToProps = ({ profilePage }) => ({
  userName: profilePage.userName,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    saveEmailAndName,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
