import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import Input from './Input';

import {
  validateEmpty,
  validateIdentity
} from '../utils/validators.js';

import styles from './SignUpForm.res/SignUpForm.css';

export class SignUpForm extends Component {
  state = {
    isNameValid: true,
    isEmailValid: true,
    isPasswordValid: true,
    isRepeatPasswordValid: true,
  }

  static propTypes = {
    createAccount: PropTypes.func.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    errorMessage: PropTypes.shape({
      message: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
    }).isRequired,
  }

  validateForm = event => {
    event.preventDefault();
    
    const { createAccount } = this.props;

    const name = this.nameInput.input.value;
    const email = this.emailInput.input.value;
    const password = this.passwordInput.input.value;
    const repeatPassword = this.repeatPasswordInput.input.value;

    let isFormValid = true;

    if (validateEmpty(name)) {
      this.setState({ isNameValid: true });
    } else {
      this.setState({ isNameValid: false });
      isFormValid = false;
    }

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

    if (validateEmpty(repeatPassword)
        && validateIdentity(password, repeatPassword)) {
      this.setState({ isRepeatPasswordValid: true });
    } else {
      this.setState({ isRepeatPasswordValid: false });
      isFormValid = false;
    }

    if (isFormValid) {
      createAccount(name, email, password)
        .then(user => browserHistory.push('/home'))
        .catch(error => console.log(error));
    } else {
      console.log('Ошибка валидации');
    }
  }

  render() {
    const {
      isEmailValid,
      isNameValid,
      isPasswordValid,
      isRepeatPasswordValid,
    } = this.state;
    const {
      isSuccess,
      errorMessage,
    } = this.props;

    return (
      <form className={ styles.container }>
        <Input
          ref={ input => this.nameInput = input }
          isValid={ isNameValid }
          text='Имя'
          placeholder='Ваше имя'/>

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
          placeholder='Новый пароль'/>
        <p className={ styles.passwordHint }>Пароль регистрозависим и должен содержать как минимум 6 символов в длину</p>

        <Input
          ref={ input => this.repeatPasswordInput = input }
          type='password'
          isValid={ isRepeatPasswordValid }
          text='Повторите пароль'
          placeholder='Повторите пароль'/>

        <p className={ isSuccess ? '' : styles.errorMessage }>
          { errorMessage.message }
        </p>

        <button
          className={ styles.createAccButton }
          onClick={ this.validateForm }
          type="submit">
          Создать аккаунт
        </button>
      </form>
    );
  }
}

export default SignUpForm;