import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './PaymentsHistoryProduct.res/PaymentsHistoryProduct.css';

const PaymentsHistoryProduct = ({
  category,
  subcategory,
  count,
  id,
  name,
  cost,
  url,
  timestamp,
}) => (
  <section className={ styles.container }>
    <img className={ styles.productPicture } src={ url } alt="product"/>
    <div className={ styles.content }>
      <Link className={ styles.productName } to={`/product/${ category }/${ subcategory }/${ id }`}>{ name }</Link>
      <p className={ styles.count }>Количество: { count }</p>
      <p className={ styles.productCostWrapper }>Цена: <span className={ styles.productCost }>{ cost }</span></p>
      <p className={ styles.timestamp }>{ timestamp }</p>
    </div>
  </section>
);

PaymentsHistoryProduct.propTypes = {
  category: PropTypes.string.isRequired,
  subcategory: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
}

export default PaymentsHistoryProduct;