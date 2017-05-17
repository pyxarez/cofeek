import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { auth } from '../firebaseApp';

import paymentsHistoryImage from './ProfilePage.res/box.svg';
import wishListImage from './ProfilePage.res/wishlist.svg';
import accountSettingsImage from './ProfilePage.res/settings.svg';
import notificationsImage from './ProfilePage.res/notifications.svg';

import styles from './ProfilePage.res/ProfilePage.css';

const ProfilePage = ({ profilePage }) => {
  return (
    <main className={ styles.container }>
      <div className={ styles.userInfoWrapper }>
        <span className={ styles.userIcon }>{ profilePage.userName[0] }</span>
        { profilePage.userName }
        <Link className={ styles.exitLink } onClick={ () => auth.signOut() } to='/home'>Выйти</Link>
      </div>

      <ul className={ styles.list }>
        <li className={ styles.paymentsHistory }>
          <img className={ styles.categoryImage } src={ paymentsHistoryImage } alt=""/>
          История покупок
        </li>

        <li className={ styles.wishList }>
          <img className={ styles.categoryImage } src={ wishListImage } alt=""/>
          Список желаемого
        </li>

        <li className={ styles.accountSettings }>
          <img className={ styles.categoryImage } src={ accountSettingsImage } alt=""/>
          Настройка аккаунта
        </li>

        <li className={ styles.notifications }>
          <img className={ styles.categoryImage } src={ notificationsImage } alt=""/>
          Уведомления
        </li>
      </ul>

    </main>
  );
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