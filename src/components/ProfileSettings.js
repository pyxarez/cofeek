import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebaseApp';

import Input from './Input';

import { validateEmpty, validateIdentity } from '../utils/validators.js';

import styles from './ProfileSettings.res/ProfileSettings.css';

export class ProfileSettings extends Component {
  state = {
    nameEmailFormState: false,
    passwordFormState: false,
    isNameValid: true,
    isEmailValid: true,
    isPasswordValid: true,
    isRepeatPasswordValid: true,
  }

  static propTypes = {
    saveEmailAndName: PropTypes.func.isRequired,
    savePassword: PropTypes.func.isRequired,
    errorMessage: PropTypes.shape({
      message: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
    }),
  }

  handleNameAndEmailSave = event => {
    event.preventDefault();

    const {
      saveEmailAndName
    } = this.props;
    const name = this.name.input.value;
    const email = this.email.input.value;

    let isFormValid = true;

    if (validateEmpty(name)) {
      this.setState({ isNameValid: true });
    } else {
      this.setState({ isNameValid: false, });
      isFormValid = false;
    }

    if (validateEmpty(email)) {
      this.setState({ isEmailValid: true });
    } else {
      this.setState({ isEmailValid: false, });
      isFormValid = false;
    }


    if (isFormValid) {
      saveEmailAndName(name, email)
        .then(() => this.toggleNameEmailForm())
        .catch(error => {});
    }
  }

  handlePasswordSave = event => {
    event.preventDefault();

    const {
      savePassword
    } = this.props;
    const password = this.password.input.value;
    const repeatPassword = this.repeatPassword.input.value;

    let isFormValid = true;

    if (validateEmpty(password)) {
      this.setState({ isPasswordValid: true });
    } else {
      this.setState({ isPasswordValid: false, });
      isFormValid = false;
    }

    if (validateEmpty(repeatPassword)) {
      this.setState({ isRepeatPasswordValid: true });
    } else {
      this.setState({ isRepeatPasswordValid: false, });
      isFormValid = false;
    }

    if (!validateIdentity(password, repeatPassword)) {
      isFormValid = false;
      this.setState({ isRepeatPasswordValid: false, isPasswordValid: false });
    }

    if (isFormValid) {
      savePassword(password)
        .then(() => this.togglePasswordForm())
        .catch(() => {});
    }
  }

  toggleNameEmailForm = () => {
    this.setState(prevState => ({ nameEmailFormState: !prevState.nameEmailFormState }));
  }

  togglePasswordForm = () => {
    this.setState(prevState => ({ passwordFormState: !prevState.passwordFormState }));
  }

  render() {
    const {
      displayName,
      email,
    } = auth.currentUser;
    const {
      nameEmailFormState,
      passwordFormState,
      isNameValid,
      isEmailValid,
      isPasswordValid,
      isRepeatPasswordValid,
    } = this.state;
    const {
      nameEmailFormErrorMessage,
      passwordFormErrorMessage,
    } = this.props;

    return (
      <section className={ styles.container }>
        { nameEmailFormState
            ? <form className={ styles.wrapper }>
                 <Input ref={ input => this.name = input} text='Имя' defaultValue={ displayName } isValid={ isNameValid } />
                 <Input ref={ input => this.email = input} text='Email' defaultValue={ email } isValid={ isEmailValid } />
                 <span className={ styles.errorMessage }>{ nameEmailFormErrorMessage.message }</span>
                 <button className={ styles.saveButton } onClick={ this.handleNameAndEmailSave } type='submit'>
                    Сохранить изменения
                 </button>
                 <span className={ styles.formToggler } onClick={ this.toggleNameEmailForm }>Отменить</span>
               </form>
                
             : <div className={ styles.wrapper }>
                 <div className={ styles.stubWrapper }>
                   <span className={ styles.stubTitle }>Имя</span>
                   { displayName }
                 </div>
                 <div className={ styles.stubWrapper }>
                   <span className={ styles.stubTitle }>Email</span>
                   { email }
                 </div>
                 <span className={ styles.formToggler } onClick={ this.toggleNameEmailForm }>Изменить</span>
               </div>}

        { passwordFormState
            ? <form className={ styles.wrapper }>
                <Input ref={ input => this.password = input} text='Пароль' placeholder='******' isValid={ isPasswordValid } type='password'/>
                <Input ref={ input => this.repeatPassword = input} text='Повторите пароль' placeholder='******' isValid={ isRepeatPasswordValid } type='password'/>
                <span className={ styles.errorMessage }>{ passwordFormErrorMessage.message }</span>
                <button className={ styles.saveButton } onClick={ this.handlePasswordSave } type='submit' >Сохранить изменения</button>
                <span className={ styles.formToggler } onClick={ this.togglePasswordForm }>Отменить</span>
              </form>
            : <div className={ styles.wrapper }>
                <div className={ styles.stubWrapper }>
                  <span className={ styles.stubTitle }>Пароль</span>
                  ******
                </div>
                <span className={ styles.formToggler } onClick={ this.togglePasswordForm }>Изменить</span>
              </div> }
      </section>
    );
  }
}

export default ProfileSettings;