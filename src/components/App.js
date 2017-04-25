import React from 'react';

import Footer from './Footer';

import HeaderContainer from '../containers/Header';
import MenuContainer from '../containers/Menu';

import styles from './App.res/App.css';

const App = ({ children }) => {
  return (
    <div className={styles.common}>
      <HeaderContainer/>
      <MenuContainer/>
        {children}
      <Footer/>
    </div>
  );
};

export default App;