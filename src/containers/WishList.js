import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import WishList from '../components/WishList';

const mapStateToProps = ({ profilePage }) => ({
  wishList: profilePage.wishList,
});

export default connect(mapStateToProps)(WishList);