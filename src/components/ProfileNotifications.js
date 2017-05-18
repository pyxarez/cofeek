import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileNotifications.res/ProfileNotifications.css';

const ProfileNotifications = ({ notifications, toggleNotifications }) => (
  <section className={ styles.container }>
    <h1 className={ styles.title }>Можем ли мы уведомлять вас?</h1>
    <p className={ styles.paragraph }>Разрешите уведомлять вас о новых релизах, акциях, последних новостях, информации о компании и т.д.<br/>
Мы, работники компании "Кофеёк", обещаем сохранить адрес вашей электронной почты в тайне.</p>
    <div className={ styles.buttonsWrapper }>
      <button
        onClick={ toggleNotifications }
        className={ notifications ? styles.activeButton : styles.inactiveButton }
        disabled={ notifications ? true : false } >Да</button>
      <button
        onClick={ toggleNotifications }
        className={ !notifications ? styles.activeButton : styles.inactiveButton }
        disabled={ !notifications ? true : false } >Нет</button>
    </div>
  </section>
);

ProfileNotifications.propTypes = {
  notifications: PropTypes.bool.isRequired,
  toggleNotifications: PropTypes.func.isRequired,
}


export default ProfileNotifications;