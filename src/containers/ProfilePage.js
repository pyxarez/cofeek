import { connect } from 'react-redux';

import ProfilePage from '../components/ProfilePage';

const mapStateToProps = ({ profilePage }) => ({
  userName: profilePage.userName,
});

export default connect(mapStateToProps)(ProfilePage);