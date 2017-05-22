import React from 'react';
import PropTypes from 'prop-types';

import WishListProductContainer from '../containers/WishListProduct';

import { toArray } from '../utils/helpers';

import styles from './WishList.res/WishList.css';

const WishList = ({ wishList }) => (
  <section>
    { toArray(wishList).map(product =>
        <WishListProductContainer key={ product.id } product={ product }/>
      ) }
  </section>
);

export default WishList;