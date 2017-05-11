import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import loupeSVG from './SearchBox.res/loupe.min.svg';

import styles from './SearchBox.res/SearchBox.css';

export class SearchBox extends Component {
  handleClick = () => {
    const value = this.searchInput.value;

    if (!value.trim()) {
      alert("Type something please");
      return;
    } 

    browserHistory.push(`/search/${value}`);
    this.searchInput.value = '';
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") this.handleClick();
  }

  render() {
    return (
      <div className={ styles.common }>
        <input
          className={ styles.input }
          ref={ input => this.searchInput = input }
          onKeyPress={ this.handleKeyPress }
          placeholder="Введите запрос..."
          type="text"/>
        <img onClick={ this.handleClick } className={ styles.loupe } src={ loupeSVG } alt="loupe"/>
      </div>
    );
  }
}

export default SearchBox;