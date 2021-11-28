import React, { useState } from 'react';
import Profile from '../images/profile.jpg';
import Input from './Input';

const Navbar = function () {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = event => setSearchValue(event.target.value);
  console.log(searchValue, 'searchValue');
  return (
    <div className="w-100 nav-bar-component d-flex justify-content-between align-items-center px-2">
      <div className="search-name-title" style={{ position: 'relative' }}>
        <Input placeHolder="Search by name" inputChange={handleChange} />
        <i
          className="fas fa-search"
          style={{
            position: 'absolute', right: '10px', top: '12px', cursor: 'pointer', color: '#AEAEAE',
          }}
        />
      </div>
      <div className="d-flex">
        <div className="user-name-section d-flex align-items-center px-3">John Doe</div>
        <div className="user-image">
          <img src={Profile} alt="Profile" style={{ width: '60px' }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
