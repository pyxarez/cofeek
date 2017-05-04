import React from 'react';
import PropTypes from 'prop-types';

import styles from './AddedPanel.res/AddedPanel.css';

const AddedPanel = ({ addedPanelState, message }) => {
  return (
    <div className={ addedPanelState ? styles.panelVisible : styles.panelHidden }>
      { message }
    </div>
  );
};

AddedPanel.propTypes = {
  addedPanelState: PropTypes.bool.isRequired,
}

AddedPanel.defaultProps = {
  message: 'Добавлено!!!'
}

export default AddedPanel;