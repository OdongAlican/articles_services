import React from 'react';
import PropTypes from 'prop-types';

const Contentwrapper = function ({ children }) {
  return <div className="h-100 p-2" style={{ background: '#F7F7F9' }}>{ children }</div>;
};

Contentwrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Contentwrapper;
