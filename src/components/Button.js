import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.res/Button.css';

const Button = ({ onClick, text, disabled }) => (
  <button className={ disabled ? styles.disabled : styles.enabled } disabled={ disabled } onClick={ onClick }>{ text }</button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  disabled: false,
}

export default Button;