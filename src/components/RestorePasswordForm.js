import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Input from './Input';

import { validateEmpty } from '../utils/validators.js';

import styles from './RestorePasswordForm.res/RestorePasswordForm.css';

export class RestorePasswordForm extends Component {
  state = {
    isEmailValid: true,
  }

  validateSendingPasswordReset = event => {
    event.preventDefault();

    const { sendPasswordReset } = this.props;
    const email = this.emailInput.input.value;
    let isFormValid = true;

    if (validateEmpty(email)) {
      this.setState({ isEmailValid: true });
    } else {
      this.setState({ isEmailValid: false });
      isFormValid = false;
    }

    if (isFormValid) {
      sendPasswordReset(email);
      browserHistory.push('/home');
    } else {
      console.log('Ошибка валидации');
    }
  }

  render() {
    const {
      isEmailValid,
    } = this.state;

    return (
      <form className={ styles.container }>
        <h1 className={ styles.formTitle }>Восстановление пароля</h1>
        <p>Введите адрес электронной почты, чтобы мы выслали письмо с информацией по восстановлению Вашего пароля</p>
        
        <Input
          ref={ input => this.emailInput = input }
          isValid={ isEmailValid }
          text='Email'
          placeholder='email@gmail.com'/>

        <button
          className={ styles.restoreButton }
          onClick={ this.validateSendingPasswordReset }
          type="submit">
          Выслать письмо
        </button>
      </form>
    );
  }
}

export default RestorePasswordForm;