import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebaseApp';

import Input from './Input';

import styles from './ProfileSettings.res/ProfileSettings.css';

export class ProfileSettings extends Component {
  state = {
    nameEmailFormState: false,
    passwordFormState: false,
    isNameValid: true,
    isEmailValid: true,
    isPasswordValid: true,
    isRepeatPassword: true,
  }
  render() {
    const {
      displayName,
      email
    } = auth.currentUser;
    const {
      isNameValid,
      isEmailValid,
      isPasswordValid,
      isRepeatPassword,
    } = this.state;

    return (
      <section className={ styles.container }>
        <div>
          
        </div>
        <form action="">
          <Input text='Имя' defaultValue={ displayName } isValid={ isNameValid } />
          <Input text='Email' defaultValue={ email } isValid={ isEmailValid } />
          <button>Сохранить изменения</button>
          <span>Отменить</span>
        </form>
        <form action="">
          <Input text='Пароль' placeholder='******' isValid={ true } type='password'/>
          <Input text='Повторите пароль' placeholder='******' isValid={ true } type='password'/>
          <button>Сохранить изменения</button>
          <span>Отменить</span>
        </form>
      </section>
    );
  }
}


ProfileSettings.propTypes = {
  userName: PropTypes.string.isRequired,
  saveEmailAndName: PropTypes.func.isRequired,
};

export default ProfileSettings;