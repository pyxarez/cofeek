import React from 'react';
import PropTypes from 'prop-types';

import PaymentsHistoryProduct from './PaymentsHistoryProduct'

import { toArray } from '../utils/helpers';

import styles from './PaymentsHistory.res/PaymentsHistory.css';

const PaymentsHistory = ({ paymentsHistory }) => {
  const convertedPayementsHistory = toArray(paymentsHistory);
  const content = convertedPayementsHistory.length === 0
    ? <h1 className={ styles.thereIsNothingToSee}>Ваш список покупок пуст.</h1>
    : convertedPayementsHistory.map(product =>
        <PaymentsHistoryProduct
          key={ product.id }
          { ...product }/>);

  return (
    <section className={ styles.container }>
      { content }
    </section>
  );
}

PaymentsHistory.propTypes = {
  paymentsHistory: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
}

export default PaymentsHistory;