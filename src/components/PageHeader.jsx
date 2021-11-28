/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const PageHeader = function ({ header, toggleModal }) {
  const location = useLocation();
  return (
    <div className="page-header bg-white py-1 px-3 d-flex justify-content-between">
      <div>{header}</div>
      <Button performAction={toggleModal} name={`Create ${location.pathname === '/users' ? 'Users' : 'Articles'}`} />
    </div>
  );
};

PageHeader.propTypes = { header: PropTypes.string.isRequired };

export default PageHeader;
