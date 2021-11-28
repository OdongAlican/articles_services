import React from 'react';
import PropTypes from 'prop-types';

const Modal = function ({ children }) {
  return (<div className="modal d-flex align-items-center justify-content-center">{children}</div>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;
