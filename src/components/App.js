import React from 'react';

import Header from './Header';
import Footer from './Footer';

import styles from './App.res/App.css';

const App = ({ children }) => {
  return (
    <div className={styles.common}>
      <Header/>
        {children}
      <Footer/>
    </div>
  );
};

export default App;