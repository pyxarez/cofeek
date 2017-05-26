import { connect } from 'react-redux';

import PaymentsHistory from '../components/PaymentsHistory';

const mapStateToProps = ({ profilePage }) => ({
  paymentsHistory: profilePage.paymentsHistory,
});

export default connect(mapStateToProps)(PaymentsHistory);