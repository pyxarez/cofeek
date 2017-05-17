import React from 'react';
import PropTypes from 'prop-types';

import notFoundImage from './SearchResultsPage.res/notFound.webp';

import Products from './Products';
import AddedPanel from '../containers/AddedPanel';

import styles from './SearchResultsPage.res/SearchResultsPage.css';

const SearchResultsPage = ({ products }) => {
  return (
    <main className={ styles.container }>
      <AddedPanel/>
      { products.data.length !== 0 && <h1 className={ styles.resultTitle }>Результаты запроса</h1> }
      { products.data.length === 0
          ? <div className={ styles.notFoundWrapper }><h3 className={ styles.nothingToSee}>По вашему запросу ничего не найдено.</h3><img src={ notFoundImage } alt="notFound"/></div>
          : <Products products={ products }/> }
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