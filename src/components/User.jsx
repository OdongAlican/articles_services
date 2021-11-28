/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useMemo, useState } from 'react';
import Profile from '../images/profile.jpg';
import Female from '../images/female.jpg';

const User = function ({ data, toggleModal }) {
  const [user, setUser] = useState({});
  useMemo(() => { setUser(data); }, []);
  return (
    <div className="d-flex">
      <div>
        <img src={user.gender === 'Female' ? Female : Profile} alt="Profile" style={{ height: '300px' }} />
      </div>
      <div className="user-details" style={{ background: '#F7F7F9', width: '200px' }}>
        <div className="text-white d-flex justify-content-between align-items-center px-2" style={{ background: '#010131' }}>
          Details
          <i className="far fa-times-circle" onClick={toggleModal} />
        </div>
        <div className="first-name p-2">
          <div className="label-name h6">First Name</div>
          <span>{user.first_name && user.first_name}</span>
        </div>
        <div className="first-name p-2">
          <div className="label-name h6">Last Name</div>
          <div>{user.first_name && user.last_name}</div>
        </div>
        <div className="first-name p-2">
          <div className="label-name h6">Adress</div>
          <div>{user.first_name && user.address}</div>
        </div>
        <div className="first-name p-2">
          <div className="label-name h6">Phone Number</div>
          <div>{user.first_name && user.phone}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
