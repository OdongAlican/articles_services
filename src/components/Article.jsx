/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteArticle } from '../actions/articles';
import Image from '../images/articles.jpg';

const Article = function ({ article }) {
  const dispatch = useDispatch();
  const deleteMethod = id => dispatch(deleteArticle(id));
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
        <Link className="page-button" style={{ textDecoration: 'none' }} to={`/article/${article.id}`} name="Details">
          Details
        </Link>
        <div>
          <i className="fas fa-md fa-user-edit" style={{ cursor: 'pointer', marginRight: '20px' }} />
          <i onClick={() => deleteMethod(article.id)} className="fas fa-md fa-trash-alt text-danger" style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default Article;
