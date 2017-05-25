import React from 'react';

import Footer from './Footer';

import HeaderContainer from '../containers/Header';
import MenuContainer from '../containers/Menu';
import CartContainer from '../containers/Cart';

import styles from './App.res/App.css';

const App = ({ children, toggleMenuState, menu }) => {
  return (
    <div className={styles.common}>
      <button className={ menu ? styles.hamburgerActive : styles.hamburgerInactive } onClick={ toggleMenuState }>
        <div className={ styles.topLayer }/>
        <div className={ styles.midLayer }/>
        <div className={ styles.botLayer }/>
      </button>
      <HeaderContainer/>
      <MenuContainer/>
      <CartContainer/>
        {children}
      <Footer/>
    </div>
  );
};

export default App;