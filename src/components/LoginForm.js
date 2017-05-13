import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import Input from './Input';

import { validateEmpty } from '../utils/validators.js';

import styles from './LoginForm.res/LoginForm.css';

export class LoginForm extends Component {
  state = {
    isEmailValid: true,
    isPasswordValid: true,
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    errorMessage: PropTypes.shape({
      message: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
    }).isRequired,
  }

  validateForm = event => {
    event.preventDefault();
    
    const { login } = this.props;
    const email = this.emailInput.input.value;
    const password = this.passwordInput.input.value;
    let isFormValid = true;

    if (validateEmpty(email)) {
      this.setState({ isEmailValid: true });
    } else {
      this.setState({ isEmailValid: false });
      isFormValid = false;
    }

    if (validateEmpty(password)) {
      this.setState({ isPasswordValid: true });
    } else {
      this.setState({ isPasswordValid: false });
      isFormValid = false;
    }

    if (isFormValid) {
      login(email, password)
        .then(user => browserHistory.push('/home'))
        .catch(error => console.log(error));
    } else {
      console.log('Ошибка валидации');
    }
  }

  render() {
    const {
      isEmailValid,
      isPasswordValid,
    } = this.state;
    const {
      isSuccess,
      errorMessage,
    } = this.props;

    return (
      <form className={ styles.container }>
        <Input
          ref={ input => this.emailInput = input }
          isValid={ isEmailValid }
          text='Email'
          placeholder='email@gmail.com'/>

        <Input
          ref={ input => this.passwordInput = input }
          isValid={ isPasswordValid }
          type='password'
          text='Пароль'
          placeholder='Пароль'/>

        <p className={ isSuccess ? '' : styles.errorMessage }>
          { errorMessage.message }
        </p>

        <button
          className={ styles.loginButton }
          onClick={ this.validateForm }
          type="submit">
          Войти
        </button>
      </form>
    );
  }
}

export default LoginForm;