import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { auth } from '../firebaseApp';

import paymentsHistoryImage from './ProfilePage.res/box.svg';
import wishListImage from './ProfilePage.res/wishlist.svg';
import accountSettingsImage from './ProfilePage.res/settings.svg';
import notificationsImage from './ProfilePage.res/notifications.svg';

import styles from './ProfilePage.res/ProfilePage.css';

const ProfilePage = ({ userName, children, location }) => {
  if (!auth.currentUser || auth.currentUser.isAnonymous) return <div className={ styles.container }>Незарегистрированный пользователь. <Link to='/login'>Войти</Link></div>;
  
  return (
    <main className={ styles.mainContainer }>
      <div className={ location.pathname === '/profile' ? styles.container : styles.containerHidden }>
        <div className={ styles.userInfoWrapper }>
          <span className={ styles.userIcon }>{ auth.currentUser.displayName[0] }</span>
          <span className={ styles.userName }>{ auth.currentUser.displayName }</span>
          <Link className={ styles.exitLink } onClick={ () => auth.signOut() } to='/home'>Выйти</Link>
        </div>

        <ul className={ styles.list }>
          <li className={ styles.category }>
            <Link className={ styles.link } activeClassName={ styles.activeLink } to='/profile/wishlist'>
              <img className={ styles.categoryImage } src={ paymentsHistoryImage } alt=""/>
              История покупок
            </Link>
          </li>

          <li className={ styles.category }>
            <Link className={ styles.link } activeClassName={ styles.activeLink } to='/profile/wishlist'>
              <img className={ styles.categoryImage } src={ wishListImage } alt=""/>
              Список желаемого
            </Link>
          </li>

          <li className={ styles.category }>
            <Link className={ styles.link } activeClassName={ styles.activeLink } to='/profile/settings'>
              <img className={ styles.categoryImage } src={ accountSettingsImage } alt=""/>
              Настройка аккаунта
            </Link>
          </li>

          <li className={ styles.category }>
            <Link className={ styles.link } activeClassName={ styles.activeLink } to='/profile/notifications'>
              <img className={ styles.categoryImage } src={ notificationsImage } alt=""/>
              Уведомления
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={ children
          ? styles.childContainerVisible
          : styles.childContainerHidden }>

        <Link className={ styles.backToProfileLink } to='/profile' >Назад</Link>
        { children }
      </div>
    </main>
  );
}

ProfilePage.propTypes = {
  userName: PropTypes.string.isRequired,
  children: PropTypes.element,
}

export default ProfilePage;