
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeSuccessPanel } from '../store/actions/SuccessPanelActions';

import AddedPanel from '../components/AddedPanel';

const mapStateToProps = ({ successPanel }) => ({
  state: successPanel.panelState,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    closeSuccessPanel,
  }, dispatch)
});

const AddedPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddedPanel);

export default AddedPanelContainer;