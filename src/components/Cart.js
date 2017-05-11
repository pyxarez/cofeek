import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import CartProductContainer from '../containers/CartProduct';

import { toArray } from '../utils/helpers';

import arrowLeftSVG from '../assets/images/goBackArrow.min.svg';

import styles from './Cart.res/Cart.css';
import background from '../assets/general.css';

const Cart = ({ cart, toggleCartState }) => {
  const products = toArray(cart.products);

  return (
    <section className={ cart.state ? background.fillBgVisible : background.fillBgHidden }>
      <div className={ cart.state ? styles.panelVisible : styles.panelHidden }>
        <header className={ styles.header }>
          <div className={ styles.continueShopping } onClick={ toggleCartState } >
            <img className={ styles.imageClose } src={ arrowLeftSVG } alt="close"/>
            <span className={ styles.boldSpan }>Продолжить покупки</span>
          </div>
        </header>

        <section className={ styles.productList }>
          { products.length > 0
            && products.map(product =>
              <CartProductContainer 
                key={ product.id }
                id={ product.id }
                name={ product.name }
                count={ product.count }
                cost={ product.cost }
                url={ product.url }/>) }
        </section>
        
        <footer className={ styles.costWrapper }>
          <span className={ styles.costLabel }>
            Сумма покупок:
          </span>
          <span className={ styles.cost }>
            { cart.totalCost }  руб.
          </span>
          <Link className={ styles.checkout } to='/checkout' onClick={ toggleCartState }>Заказать товары</Link>
        </footer>
      </div>
    </section>
  );
};

Cart.propTypes = {
  cart: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    hasReceivedData: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    products: PropTypes.object.isRequired,
    totalCost: PropTypes.number.isRequired,
  }),
  toggleCartState: PropTypes.func.isRequired,
}

export default Cart;