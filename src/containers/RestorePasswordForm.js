import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RestorePasswordForm from '../components/RestorePasswordForm';

import { sendPasswordReset } from '../store/actions/LoginSignUpPageActions';

const mapStateToProps = ({ loginSignUpPage }) => ({
  errorMessage: loginSignUpPage.restorePasswordErrorMessage,
  isSuccess: loginSignUpPage.restorePasswordSuccess,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ sendPasswordReset }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestorePasswordForm);