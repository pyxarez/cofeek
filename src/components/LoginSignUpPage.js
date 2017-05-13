import React, { Component } from 'react';

import RestorePasswordForm from '../containers/RestorePasswordForm';
import SignUpForm from '../containers/SignUpForm';
import LoginForm from '../containers/LoginForm';

import styles from './LoginSignUpPage.res/LoginSignUpPage.css';

export class LoginSignUpPage extends Component {
  state = {
    loginFormState: true,
    signUpFormState: false,
  }

  openLoginForm = () => {
    this.setState({
      loginFormState: true,
      signUpFormState: false
    });
  }

  openSignUpForm = () => {
    this.setState({
      loginFormState: false,
      signUpFormState: true,
    });
  }

  render() {
    const { loginFormState, signUpFormState } = this.state;

    return (
      <main className={ styles.container }>
        <div className={ styles.tabs }>
          <span onClick={ this.openLoginForm } className={ loginFormState ? styles.loginTabActive : styles.loginTabInactive }>Вход</span>
          <span onClick={ this.openSignUpForm } className={ signUpFormState ? styles.signUpTabActive : styles.signUpTabInactive }>Регистрация</span>
        </div>
        { loginFormState
          ? <div className={ styles.formsContainer }>
              <LoginForm />
              <RestorePasswordForm/>
            </div>
          : <SignUpForm/> }
        {/*{ loginFormState
            ? <LoginForm />
            : <SignUpForm/> }
        { loginFormState 
            && <RestorePasswordForm/> } */}
      </main>
    );
  }
}

export default LoginSignUpPage;
