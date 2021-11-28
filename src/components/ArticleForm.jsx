/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createArticle } from '../actions/articles';
import { validateArticle } from '../helpers/velidator';
import Button from './Button';
// import Error from './Error';
import Input from './Input';

const initialSate = {
  content: '',
  title: '',
};

const ArticleForm = function ({ toggleModal }) {
  const [values, setValues] = useState(initialSate);
  const [errors, setErrors] = useState(initialSate);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target; setValues({ ...values, [name]: value });
  };

  const validateForm = () => setErrors(validateArticle(values, 'create state'));

  useEffect(() => {
    console.log(values, errors);
    if (Object.values(errors).includes('create')) {
      if (Object.keys(errors).length === 1) {
        dispatch(createArticle(values)); toggleModal();
      }
    }
  }, [errors]);
  return (
    <>
      <div className="user-form">
        <div className="grid-element">
          <div className="grid-element-content" style={{ position: 'relative' }}>
            <div className="grid-label mt-3">Title</div>
            <Input inputName="title" value={values.title} inputChange={handleChange} />
          </div>
          <div className="grid-element-content" style={{ position: 'relative' }}>
            <div className="grid-label mt-3">Content</div>
            <textarea value={values.content} className="p-2" name="content" id="" cols="62" rows="5" onChange={handleChange} />
          </div>
        </div>
      </div>
      <div className="grid-element-content d-flex mt-3">
        <div className="px-2">
          <Button name="Submit" performAction={validateForm} />
        </div>
        <Button cancel name="Cancel" performAction={toggleModal} />
      </div>
    </>
  );
};

export default ArticleForm;
