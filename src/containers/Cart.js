import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleCartState } from '../store/actions/CartActions';

import Cart from '../components/Cart';

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    toggleCartState,
  }, dispatch)
});

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;
