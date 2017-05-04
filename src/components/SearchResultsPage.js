import React from 'react';
import PropTypes from 'prop-types';

import Products from './Products';

import styles from './SearchResultsPage.res/SearchResultsPage.css';

const SearchResultsPage = ({ products }) => {
  return (
    <main className={ styles.container }>
      <h1 className={ styles.resultTitle }>Результаты запроса</h1>
      <Products products={ products }/>
    </main>
  );
};

SearchResultsPage.propTypes = {
  products: PropTypes.shape({
    hasReceivedData: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
  }).isRequired,
};

export default SearchResultsPage;