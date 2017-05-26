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

Hamburger.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Hamburger;