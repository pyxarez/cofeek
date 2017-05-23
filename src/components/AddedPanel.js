import React from 'react';
import PropTypes from 'prop-types';

import styles from './AddedPanel.res/AddedPanel.css';

const AddedPanel = ({ state, closeSuccessPanel, message }) => {
  return (
    <div className={ state ? styles.panelVisible : styles.panelHidden }>
      { message }
    {/* Нарисовать крестик, с помощью которого буду закрывать панельку <svg><g></g></svg>*/}
    </div>
  );
};

AddedPanel.propTypes = {
  state: PropTypes.bool.isRequired,
  closeSuccessPanel: PropTypes.func.isRequired,
}

AddedPanel.defaultProps = {
  message: 'Добавлено!!!'
}

export default AddedPanel;