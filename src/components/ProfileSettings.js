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

  toggleNameEmailForm = () => {
    this.setState(prevState => ({ nameEmailFormState: !prevState.nameEmailFormState }));
  }

  togglePasswordForm = () => {
    this.setState(prevState => ({ passwordFormState: !prevState.passwordFormState }));
  }

  render() {
    const {
      displayName,
      email
    } = auth.currentUser;
    const {
      nameEmailFormState,
      passwordFormState,
      isNameValid,
      isEmailValid,
      isPasswordValid,
      isRepeatPassword,
    } = this.state;

    return (
      <section className={ styles.container }>
        { nameEmailFormState
            ? <form className={ styles.wrapper }>
                 <Input text='Имя' defaultValue={ displayName } isValid={ isNameValid } />
                 <Input text='Email' defaultValue={ email } isValid={ isEmailValid } />
                 <button className={ styles.saveButton } type='submit' onClick={e => e.preventDefault() }>Сохранить изменения</button>
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
                <Input text='Пароль' placeholder='******' isValid={ true } type='password'/>
                <Input text='Повторите пароль' placeholder='******' isValid={ true } type='password'/>
                <button className={ styles.saveButton } type='submit' onClick={e => e.preventDefault() }>Сохранить изменения</button>
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


ProfileSettings.propTypes = {
  userName: PropTypes.string.isRequired,
  saveEmailAndName: PropTypes.func.isRequired,
};

export default ProfileSettings;