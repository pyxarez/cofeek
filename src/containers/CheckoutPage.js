import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  clearCart,
} from '../store/actions/CartActions';
import {
  openSuccessPanel,
} from '../store/actions/SuccessPanelActions';

import {
  toggleAddressForm,
  toggleGiftTextarea,
  payProducts,
} from '../store/actions/CheckoutPageActions';

import CheckoutPage from '../components/CheckoutPage';

const mapStateToProps = ({ checkoutPage }) => ({
  checkoutPage
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    toggleAddressForm,
    toggleGiftTextarea,
    openSuccessPanel,
    clearCart,
    payProducts,
  }, dispatch)
});

const CheckoutPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);

export default CheckoutPageContainer;