/* eslint-disable react/prop-types */
import React from 'react';
import Image from '../images/articles.jpg';
import Button from './Button';

const Article = function ({ article }) {
  return (
    <div className="bg-white w-100">
      <div className="d-flex">
        <div className="w-50">
          <img src={Image} alt="Article" style={{ width: '100%' }} />
        </div>
        <div className="w-50 p-1">
          <div className="article-header">{article.title}</div>
          <div className="h6 article-author">
            By:
            {' '}
            {' '}
            { `${article.user.first_name} ${article.user.last_name}` }
          </div>
        </div>
      </div>
      <div className="article-text p-2" style={{ height: '70px' }}>
        {article.content.length < 100 ? (article.content) : (`${article.content.substring(0, 100)} ...`)}
      </div>
      <div className="button-section p-1 d-flex justify-content-between">
        <Button name="Details" />
        <div>
          <i className="fas fa-md fa-user-edit" style={{ cursor: 'pointer', marginRight: '20px' }} />
          <i className="fas fa-md fa-trash-alt text-danger" style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default Article;
