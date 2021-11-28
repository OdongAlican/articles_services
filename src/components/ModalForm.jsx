/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

const ModalForm = function ({ header, children, toggleModal }) {
  return (
    <div className="w-50">
      <div className="modal-form-header text-white w-100 d-flex align-items-center justify-content-between px-3">
        <h5 style={{ marginTop: '5px' }}>{header}</h5>
        <i className="far fa-lg fa-times-circle" onClick={toggleModal} />
      </div>
      <div className="bg-white modal-form-content p-3">{children}</div>
    </div>
  );
};

ModalForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  header: PropTypes.string.isRequired,
};

export default ModalForm;
