import React, { Component } from 'react';
import { browserHistory } from 'react-router';


import styles from './SearchBox.res/SearchBox.css';

export class SearchBox extends Component {
  handleClick = event => {
    event.preventDefault();
    const value = this.searchInput.value;

    if (!value.trim()) {
      alert("Type something please");
      return;
    } 

    browserHistory.push(`/search/${value}`);
    this.searchInput.value = '';
    this.searchInput.blur();
  }

  render() {
    return (
      <form className={ styles.common }>
        <input
          className={ styles.input }
          ref={ input => this.searchInput = input }
          onKeyPress={ this.handleKeyPress }
          placeholder="Введите запрос..."
          type="text"/>
        <button onClick={ this.handleClick } className={ styles.loupe } type="submit"/>
      </form>
    );
  }
}

export default SearchBox;