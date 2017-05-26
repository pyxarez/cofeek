import React from 'react';
import PropTypes from 'prop-types';

import styles from './Hamburger.res/Hamburger.css';

const Hamburger = ({ active, onClick }) => (
  <button
    className={ active
      ? styles.active
      : styles.inactive }
    onClick={ onClick }/>
);

export default Hamburger;