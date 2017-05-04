import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { validateEmpty } from '../utils/validators.js';

import styles from './CommonDataForm.res/CommonDataForm.css'

export class CommonDataForm extends Component {
  state = {
    firstName: true,
    lastName: true,
    city: true,
    address: true,
    zipCode: true,
    phoneNumber: true,
  }

  static propTypes = {
    visible: PropTypes.bool,
  }
  
  static defaultProps = {
    visible: true,
  }

  handleValidate = () => {
    let isFormValid = true;

    if (validateEmpty(this.firstName.value)) {
      this.setState({ firstName: true });
    } else {
      this.setState({ firstName: false, });
      isFormValid = false;
    }

    if (validateEmpty(this.lastName.value)) {
      this.setState({ lastName: true });
    } else {
      this.setState({ lastName: false, });
      isFormValid = false;
    }
    
    if (validateEmpty(this.city.value)) {
      this.setState({ city: true });
    } else {
      this.setState({ city: false, });
      isFormValid = false;
    }

    if (validateEmpty(this.address.value)) {
      this.setState({ address: true });
    } else {
      this.setState({ address: false, });
      isFormValid = false;
    }
    
    if (validateEmpty(this.zipCode.value)) {
      this.setState({ zipCode: true });
    } else {
      this.setState({ zipCode: false, });
      isFormValid = false;
    }

    if (validateEmpty(this.phoneNumber.value)) {
      this.setState({ phoneNumber: true });
    } else {
      this.setState({ phoneNumber: false, });
      isFormValid = false;
    }

    return isFormValid;
  }

  render() {
    const { visible } = this.props;
    const { 
      firstName,
      lastName,
      city,
      address,
      zipCode,
      phoneNumber
    } = this.state;

    return (
      <form className={ visible ? styles.visible : styles.hidden }>
        <label className={ styles.formLabel }>
          Имя
          <input
            className={ firstName ? styles.validTextField : styles.invalidTextField }  
            ref={ input => this.firstName = input }
            type="text"
            placeholder='Василий'
            maxLength={30}/>
        </label>

        <label className={ styles.formLabel }>
          Фамилия
          <input
            className={ lastName ? styles.validTextField : styles.invalidTextField }
            ref={ input => this.lastName = input }
            type="text"
            placeholder='Петрович'
            maxLength={ 30 }/>
        </label>

        <label className={ styles.formLabel }>
          Город
          <input
            className={ city ? styles.validTextField : styles.invalidTextField }
            ref={ input => this.city = input }
            type="text"
            placeholder='Краснодар'
            maxLength={ 30 }/>
        </label>

        <label className={ styles.formLabel }>
          Адрес
          <input
            className={ address ? styles.validTextField : styles.invalidTextField }
            ref={ input => this.address = input }
            type="text"
            placeholder='ул. Радищева, д.10 А, кв. 200'
            maxLength={ 40 }/>
        </label>

        <label className={ styles.formLabel }>
          Почтовый индекс
          <input
            className={ zipCode ? styles.validNumberField : styles.invalidNumberField }
            ref={ input => this.zipCode = input }
            type="number"
            placeholder='410007'/>
        </label>

        <label className={ styles.formLabel }>
          Номер телефона
          <input
            className={ phoneNumber ? styles.validNumberField : styles.invalidNumberField }
            ref={ input => this.phoneNumber = input }
            type="number"
            placeholder='+7 967 507-10-50'/>
        </label>
        <p className={ styles.aboutNumber }>Номер используется в целях упрощения доставки.</p>
      </form>
    );
  }
}

export default CommonDataForm;
