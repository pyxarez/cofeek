import React from 'react';

import styles from './AddedPanel.res/AddedPanel.css';

const AddedPanel = ({ cart }) => {
  return (
    <div className={ cart.addedPanelState ? styles.panelVisible : styles.panelHidden }>
      Добавлено!!!
    </div>
  );
};

export default AddedPanel;