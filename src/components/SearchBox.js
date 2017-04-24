import React from 'react';
import PropTypes from 'prop-types';

import loupeSVG from './SearchBox.res/loupe.svg';

import styles from './SearchBox.res/style.css';

const SearchBox = () => (
  <div className={styles.common}>
    <input className={styles.input} placeholder="Введите запрос..." type="text"/>
    <img className={styles.loupe} src={loupeSVG} alt="loupe"/>
  </div>
);

export default SearchBox;