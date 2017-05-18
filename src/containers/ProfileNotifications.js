import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProfileNotifications from '../components/ProfileNotifications';

import { toggleNotifications } from '../store/actions/ProfilePageActions';

const mapStateToProps = ({ profilePage }) => ({
  notifications: profilePage.notifications,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    toggleNotifications
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNotifications);
