/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

const Button = function ({ name, performAction, cancel }) {
  return (<button onClick={performAction} className={`${cancel ? 'cancel-button' : 'page-button'}`} type="button">{name}</button>);
};

Button.propTypes = { name: PropTypes.string.isRequired };

export default Button;
