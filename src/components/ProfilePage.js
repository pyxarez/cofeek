import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProfilePage.res/ProfilePage.css';

const ProfilePage = ({ profilePage }) => {
  return <main className={ styles.container }></main>;
}

ProfilePage.propTypes = {
  profilePage: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    paymentsHistory: PropTypes.object.isRequired,
    wishList: PropTypes.object.isRequired,
    notifications: PropTypes.bool.isRequired,
  }).isRequired,
}

export default ProfilePage;