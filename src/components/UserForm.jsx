/* eslint-disable react/prop-types */

import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import Input from './Input';
import Button from './Button';
import { validateUser } from '../helpers/velidator';
import { createUser, updateUser } from '../actions/users';
import Error from './Error';

const initialSate = {
  first_name: '',
  last_name: '',
  gender: 'Female',
  address: '',
  phone: '',
};

const UserForm = function ({ toggleModal, data }) {
  const [values, setValues] = useState(initialSate);
  const [errors, setErrors] = useState(initialSate);
  const dispatch = useDispatch();

  useMemo(() => { if (typeof data === 'object') { setValues(data); } }, [data]);

  const handleChange = e => {
    const { name, value } = e.target; setValues({ ...values, [name]: value });
  };

  const validateForm = () => setErrors(validateUser(values, 'create state'));
  useEffect(() => {
    if (Object.values(errors).includes('create')) {
      if (Object.keys(errors).length === 1) {
        if (typeof data === 'string') { dispatch(createUser(values)); toggleModal(); }
        if (typeof data === 'object') { dispatch(updateUser(values, data.id)); toggleModal(); }
      }
    }
  }, [errors]);

  return (
    <>
      <div className="user-form">
        <div className="grid-element">
          <div className="grid-element-content" style={{ position: 'relative' }}>
            <div className="grid-label mt-3">First Name</div>
            <Input inputName="first_name" inputValue={values.first_name} inputChange={handleChange} />
            <Error message={errors.first_name} />
          </div>
          <div className="grid-element-content" style={{ position: 'relative' }}>
            <div className="grid-label mt-3">Last Name</div>
            <Input inputName="last_name" inputValue={values.last_name} inputChange={handleChange} />
            <Error message={errors.last_name} />
          </div>
        </div>
        <div className="grid-element">
          <div className="grid-element-content" style={{ position: 'relative' }}>
            <div className="grid-label mt-3">Gender</div>
            <select name="gender" value={values.gender} onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="grid-element-content" style={{ position: 'relative' }}>
            <div className="grid-label mt-3">Address</div>
            <Input inputName="address" inputValue={values.address} inputChange={handleChange} />
            <Error message={errors.address} />
          </div>
        </div>
        <div className="grid-element">
          <div className="grid-element-content" style={{ position: 'relative' }}>
            <div className="grid-label mt-3">Phone Number</div>
            <Input inputName="phone" inputValue={values.phone} inputChange={handleChange} />
            <Error message={errors.phone} />
          </div>
        </div>
      </div>
      <div className="grid-element-content d-flex mt-3 justify-content-end">
        <div className="px-2">
          <Button name="Submit" performAction={validateForm} />
        </div>
        <Button cancel name="Cancel" performAction={toggleModal} />
      </div>
    </>
  );
};

export default UserForm;
