import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignUpForm from '../components/SignUpForm';

import { createAccount } from '../store/actions/LoginSignUpPageActions';

const mapStateToProps = ({ loginSignUpPage }) => ({
  errorMessage: loginSignUpPage.signUpErrorMessage,
  isSuccess: loginSignUpPage.signUpSuccess,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ createAccount }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);