/* eslint-disable import/prefer-default-export */

export const pageRoutes = [
  { name: 'Dashboard', route: '/', iconClass: 'fas fa-th' },
  { name: 'Users', route: '/users', iconClass: 'fas fa-users' },
  { name: 'Articles', route: '/articles', iconClass: 'far fa-newspaper' },
  { name: 'Settings', route: '/settings', iconClass: 'fas fa-cogs' },
  { name: 'About Us', route: '/about', iconClass: 'fas fa-address-card' },
];

export const usersTableHeader = {
  id: 0,
  first_name: 'First Name',
  last_name: 'Last Name',
  gender: 'Gender',
  phone: 'Phone',
  address: 'Address',
  update: '',
};
