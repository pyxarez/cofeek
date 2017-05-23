import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import AddedPanel from '../containers/AddedPanel';

import CommonDataForm from './CommonDataForm';
import CreditCardForm from './CreditCardForm';

import styles from './CheckoutPage.res/CheckoutPage.css';

export class CheckoutPage extends Component {
  static propTypes = {
    clearCart: PropTypes.func.isRequired,
    openSuccessPanel: PropTypes.func.isRequired,
    toggleAddressForm: PropTypes.func.isRequired,
    toggleGiftTextarea: PropTypes.func.isRequired,
    checkoutPage: PropTypes.shape({
      addressFromState: PropTypes.bool.isRequired,
    }).isRequired,
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      openSuccessPanel,
      clearCart,
    } = this.props;

    const isFirstFormValid = this.billingAddressForm.handleValidate();
    const isCreditCardFormValid = this.creditCardForm.handleValidate();

    if (this.props.checkoutPage.addressFromState) {
      const isSecondFormValid = this.shippingAddressForm.handleValidate();

      if (!isFirstFormValid || !isSecondFormValid || !isCreditCardFormValid) {
        window.scrollTo(0, 0);
      }
    } else if (!isFirstFormValid || !isCreditCardFormValid) {
      window.scrollTo(0, 0);
    } else {
      openSuccessPanel(1500);

      setTimeout(() => {
          clearCart();
          browserHistory.push('/home');
      }, 1500);
    }
  }

  render() {
    const {
      toggleAddressForm,
      toggleGiftTextarea,
      checkoutPage,
    } = this.props;

    return (
      <main className={ styles.container }>
        <AddedPanel message='Удачно!!!'/>
        <h1 className={ styles.checkoutTitle }>Заполните информацию о заказе</h1>

          <section>
            <h2 className={ styles.formTitle }>1 Платёжный адрес</h2>
            <p className={ styles.infoLine}>Пожалуйста, введите информацию, ассоциирующуюся с вашей кредитной картой</p>
            <CommonDataForm ref={ input => this.billingAddressForm = input}/>
          </section>

          <section className={ styles.wrapper }>
            <h2 className={ styles.formTitle }>2 Адрес доставки</h2>

            <label className={ styles.deliveryType }>
              <input name='delivery-type' type="radio" onChange={ toggleAddressForm } defaultChecked/>
              Доставить на платёжный адрес
            </label>
            <label className={ styles.deliveryType }>
              <input name='delivery-type' onChange={ toggleAddressForm } type="radio"/>
              Доставить на другой адрес
            </label>

            <CommonDataForm ref={ input => this.shippingAddressForm = input} visible={ checkoutPage.addressFromState }/>
          </section>

          <section className={ styles.wrapper }>
            <h2 className={ styles.formTitle }>3 Дополнительные опции</h2>
            <form>
              <label className={ styles.isThisAGift }>
                <input onChange={ toggleGiftTextarea } type="checkbox"/>
                Это подарок? Отправим заказ без указания цены!
              </label>
              <div className={ checkoutPage.giftTextareaState ? styles.giftMessageWrapperVisible : styles.giftMessageWrapperHidden }>
                Подпись к подарку
                <textarea className={ styles.giftMessage } name="" id="" cols="30" rows="10"></textarea>
              </div>
            </form>
          </section>

          <section className={ styles.wrapper }>
            <h2 className={ styles.formTitle }>4 Способ доставки</h2>
            <form className={ styles.wrapper }>
              <label className={ styles.deliveryWrapper }>
                <input name='delivery-type' type="radio"/>
                Эконом 1 - 20 дней
                <span className={ styles.deliveryCost }>Бесплатно!</span>
              </label>

              <label className={ styles.deliveryWrapper }>
                <input name='delivery-type' type="radio" defaultChecked/>
                Стандарт 1 - 10 дней
                <span className={ styles.deliveryCost }>480.00 руб.</span>
              </label>

              <label className={ styles.deliveryWrapper }>
                <input name='delivery-type' type="radio"/>
                Экспресс 1 -5 дней
                <span className={ styles.deliveryCost }>890.00 руб.</span>
              </label>
            </form>
          </section>

          <section className={ styles.wrapper }>
            <h2 className={ styles.formTitle }>5 Данные кредитной карты</h2>
            <p className={ styles.cardTypes }>Мы принимаем Visa и MasterCard.</p>
            <CreditCardForm ref={ input => this.creditCardForm = input }/>
          </section>

          <button className={ styles.checkoutButton } onClick={ this.handleSubmit }>Подтвердить покупку</button>

      </main>
    );
  }
}

export default CheckoutPage;