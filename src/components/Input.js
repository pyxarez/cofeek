import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Input.res/Input.css';

export class Input extends Component {
  static propTypes = {
    text: PropTypes.string,
    placeholder: PropTypes.string,
    isValid: PropTypes.bool,
    maxLength: PropTypes.number,
    type: PropTypes.string,
    defaultValue: PropTypes.string,
  }

  static defaultProps = {
    text: 'Default text',
    placeholder: 'Type something...',
    isValid: true,
    maxLength: 30,
    type: 'text'
  }

  render() {
    const {
      text,
      placeholder,
      isValid,
      maxLength,
      type,
      defaultValue
    } = this.props;

    return (
      <label className={ styles.inputLabel }>
        { text }
        <input
          className={ isValid ? styles.validInput : styles.invalidInput }
          ref={ input => this.input = input }
          type={ type }
          placeholder={ placeholder }
          defaultValue={ defaultValue }
          maxLength={ maxLength }/>
      </label>
    );
  }
}

export default Input;
