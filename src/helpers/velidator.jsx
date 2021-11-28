/* eslint-disable import/prefer-default-export */

export const validateUser = (values, state) => {
  const errors = {};
  if (state === 'create state') { errors.state = 'create'; }
  if (!values.first_name) { errors.first_name = 'Required'; }
  if (!values.last_name) { errors.last_name = 'Required'; }
  if (!values.address) { errors.address = 'Required'; }
  if (!values.phone) { errors.phone = 'Required'; }
  return errors;
};
