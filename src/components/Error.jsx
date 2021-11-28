import React from 'react';
import PropTypes from 'prop-types';

const Error = function ({ message }) {
  return (
    <div
      className="text-danger"
      style={{
        fontSize: '10px', position: 'absolute', left: 0, bottom: '-15px',
      }}
    >
      { message }
    </div>
  );
};

Error.propTypes = { message: PropTypes.string.isRequired };

export default Error;
