import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginForm from '../components/LoginForm';

import { login } from '../store/actions/LoginSignUpPageActions';

const mapStateToProps = ({ loginSignUpPage }) => ({
  errorMessage: loginSignUpPage.loginErrorMessage,
  isSuccess: loginSignUpPage.loginSuccess,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ login }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);