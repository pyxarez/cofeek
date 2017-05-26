import React from 'react';
import PropTypes from 'prop-types';

import WishListProductContainer from '../containers/WishListProduct';

import { toArray } from '../utils/helpers';

import styles from './WishList.res/WishList.css';

const WishList = ({ wishList }) => {
  const convertedWishList = toArray(wishList);
  const content = convertedWishList.length === 0
    ? <h1 className={ styles.thereIsNothingToSee}>Ваш список желаемого пуст.</h1>
    : convertedWishList.map(product =>
        <WishListProductContainer key={ product.id } product={ product }/>);

  return (
    <section className={ styles.container }>
      { content }
    </section>
  );
}

WishList.propTypes = {
  wishList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
}

export default WishList;