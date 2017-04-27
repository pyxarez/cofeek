import React from 'react';
import PropTypes from 'prop-types';

import CartProductContainer from '../containers/CartProduct';

import { toArray } from '../utils/helpers';

import arrowLeftSVG from '../assets/images/goBackArrow.svg';
import styles from './Cart.res/Cart.css';

const Cart = ({ cart, toggleCartState }) => {
  const products = toArray(cart.products);

  return (
    <section className={cart.state ? styles.fillVisible : styles.fillHidden}>
      <div className={cart.state ? styles.panelVisible : styles.panelHidden}>
        <header className={styles.header}>
          <div className={styles.continueShopping} onClick={toggleCartState} >
            <img className={styles.imageClose} src={arrowLeftSVG} alt="close"/>
            <span className={styles.boldSpan}>Продолжить покупки</span>
          </div>
        </header>

        <section className={styles.productList}>
          {products.length > 0
            && products.map(product =>
              <CartProductContainer 
                key={product.id}
                id={product.id}
                name={product.name} 
                count={product.count} 
                cost={product.cost} 
                url={product.url}/>)}
        </section>
        
        <footer className={styles.costWrapper}>
          <span className={styles.costLabel}>
            Сумма покупок:
          </span>
          <span className={styles.cost}>
            {cart.totalCost}  руб.
          </span>
          <button className={styles.checkout}>Заказать товары</button>
        </footer>
      </div>
    </section>
  );
};

Cart.PropTypes = {
  cart: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    hasReceivedData: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
    totalCost: PropTypes.number.isRequired,
  }),
  toggleCartState: PropTypes.func.isRequired,
}

export default Cart;