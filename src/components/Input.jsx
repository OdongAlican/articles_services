/* eslint-disable react/prop-types */
import React from 'react';

const Input = function ({
  placeHolder, inputChange, inputValue, inputName,
}) {
  return (
    <input name={inputName} value={inputValue} className="page-input" placeholder={placeHolder} type="text" onChange={inputChange} />
  );
};

export default Input;
