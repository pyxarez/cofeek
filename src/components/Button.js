import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.res/Button.css';

const Button = ({ onClick, text }) => (
  <button className={ styles.container } onClick={ onClick }>{ text }</button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
}

export default Button;