import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  toggleAddedPanelState,
  clearCart,
} from '../store/actions/CartActions';

import {
  toggleAddressForm,
  toggleGiftTextarea
} from '../store/actions/CheckoutPageActions';

import CheckoutPage from '../components/CheckoutPage';

const mapStateToProps = ({ checkoutPage }) => ({
  checkoutPage
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    toggleAddressForm,
    toggleGiftTextarea,
    toggleAddedPanelState,
    clearCart,
  }, dispatch)
});

const CheckoutPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);

export default CheckoutPageContainer;