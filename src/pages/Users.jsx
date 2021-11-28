/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchAllUsers } from '../actions/users';
import ContentWrapper from '../components/Contentwrapper';
import PageHeader from '../components/PageHeader';
import { usersTableHeader } from '../constants';
import Profile from '../images/profile.jpg';
import Female from '../images/female.jpg';
import Modal from '../components/Modal';
import ModalForm from '../components/ModalForm';
import UserForm from '../components/UserForm';

const Users = function () {
  const [usersData, setUsersData] = useState([]);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersReducer.users);
  useEffect(() => { setUsersData([usersTableHeader, ...users]); }, [users]);
  useEffect(() => { dispatch(fetchAllUsers()); }, []);
  const displayModal = () => setModal(!modal);
  const removeUser = id => dispatch(deleteUser(id));
  return (
    <ContentWrapper>
      {modal && (
      <Modal>
        <ModalForm header="Create User" toggleModal={displayModal}>
          <UserForm toggleModal={displayModal} />
        </ModalForm>
      </Modal>
      )}
      <PageHeader header="Users List" toggleModal={displayModal} />
      <div>
        {
          usersData.map(user => (
            <div key={user.id} className="container">
              <div style={{ background: `${user.id === 0 ? '#010131' : '#fff'}`, color: `${user.id === 0 ? '#fff' : '#010131'}` }} className="row my-2 py-1">
                <div className="col-sm">
                  {user.id !== 0 ? (
                    <img
                      style={{ height: '50px', marginRight: '10px' }}
                      src={user.gender === 'Male' ? Profile : Female}
                      alt="Profile"
                    />
                  ) : null}
                  {user.first_name}
                </div>
                <div className="col-sm d-flex align-items-center">{user.last_name}</div>
                <div className="col-sm d-flex align-items-center">{user.gender}</div>
                <div className="col-sm d-flex align-items-center">{user.phone}</div>
                <div className="col-sm d-flex align-items-center">{user.address}</div>
                <div className="col-sm d-flex align-items-center">
                  { user.id !== 0 ? (
                    <div>
                      <i className="fas fa-lg fa-user-edit" style={{ cursor: 'pointer', marginRight: '20px' }} />
                      <i onClick={() => removeUser(user.id)} className="fas fa-lg fa-trash-alt text-danger" style={{ cursor: 'pointer' }} />
                    </div>
                  ) : ''}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </ContentWrapper>
  );
};

export default Users;
