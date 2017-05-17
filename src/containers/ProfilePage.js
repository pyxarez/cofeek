import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import ProfilePage from '../components/ProfilePage';

const mapStateToProps = ({ profilePage }) => ({
  profilePage,
});

export default connect(mapStateToProps)(ProfilePage);