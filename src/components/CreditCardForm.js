import React, { Component } from 'react';

import { validateEmpty } from '../utils/validators';

import styles from './CreditCardForm.res/CreditCardForm.css';

export class CreditCardForm extends Component {
  state = {
    cardName: true,
    cardNumber: true,
    cardTime: true,
    cardSecCode: true,
  }

  handleValidate = () => {
    let isFormValid = true;

    if (validateEmpty(this.cardName.value)) {
      this.setState({ cardName: true });
    } else {
      this.setState({ cardName: false, });
      isFormValid = false;
    }

    if (validateEmpty(this.cardNumber.value)) {
      this.setState({ cardNumber: true });
    } else {
      this.setState({ cardNumber: false, });
      isFormValid = false;
    }
    
    if (validateEmpty(this.cardTime.value)) {
      this.setState({ cardTime: true });
    } else {
      this.setState({ cardTime: false, });
      isFormValid = false;
    }

    if (validateEmpty(this.cardSecCode.value)) {
      this.setState({ cardSecCode: true });
    } else {
      this.setState({ cardSecCode: false, });
      isFormValid = false;
    }

    return isFormValid;
  }

  render() {
    const {
      cardName,
      cardNumber,
      cardTime,
      cardSecCode,
    } = this.state;

    return (
      <form className={ styles.creditCardForm }>
        <label className={ styles.creditCardLabel }>
          Номер карты
          <input
            ref={ input => this.cardNumber = input}
            className={ cardNumber ? styles.creditCardNumberValid : styles.creditCardNumberInvalid }
            placeholder='4444 4444 4444 4444'
            type="number"/>
        </label>

        <label className={ styles.creditCardLabel }>
          Имя обладателя кредитной карты
          <input
            ref={ input => this.cardName = input}
            className={ cardName ? styles.creditCardOwnerValid : styles.creditCardOwnerInvalid }
            placeholder='VALILIY PUPKIN'
            type="text"/>
        </label>

        <label className={ styles.creditCardLabel }>
          Срок действия
          <input
            ref={ input => this.cardTime = input}
            className={ cardTime ? styles.creditCardSmallInputValid : styles.creditCardSmallInputInvalid }
            placeholder='ММ/ГГ'
            type="number"/>
        </label>

        <label className={ styles.creditCardLabel }>
          Код безопасности
          <input
            ref={ input => this.cardSecCode = input}
            className={ cardSecCode ? styles.creditCardSmallInputValid : styles.creditCardSmallInputInvalid  }
            placeholder='123'
            type="number"/>
        </label>
      </form>
    );
  }
}

export default CreditCardForm;