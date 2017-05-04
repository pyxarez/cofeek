
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleAddedPanelState } from '../store/actions/CartActions';

import AddedPanel from '../components/AddedPanel';

const mapStateToProps = ({ cart }) => ({
  addedPanelState: cart.addedPanelState,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    toggleAddedPanelState,
  }, dispatch)
});

const AddedPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddedPanel);

export default AddedPanelContainer;