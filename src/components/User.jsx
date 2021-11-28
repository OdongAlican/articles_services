import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchOneUser } from '../actions/users';

const User = function () {
  const { token } = useParams();
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchOneUser(4)); }, []);
  return (
    <div>
      <p>{token}</p>
    </div>
  );
};

export default User;
