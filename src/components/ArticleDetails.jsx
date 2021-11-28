import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchOneArticle } from '../actions/articles';
import ContentWrapper from './Contentwrapper';
import PageHeader from './PageHeader';
import Image from '../images/articles.jpg';
import Button from './Button';
import Input from './Input';

const ArticleDetails = function () {
  const dispatch = useDispatch();
  const { id } = useParams();

  const article = useSelector(state => state.articlesReducer.article);
  useEffect(() => { dispatch(fetchOneArticle(id)); }, []);

  console.log(article, 'article');
  return (
    <ContentWrapper>
      <PageHeader header="Article's Details" />
      {
          Object.keys(article).length > 0 ? (
            <div className="articles-detailed-section mt-3">
              <div>
                <img src={Image} alt="Icon" style={{ height: '200px', width: '100%' }} />
                <div className="article-details-content">
                  <div className="article-details-content-header h5">
                    { article.title && article.title }
                  </div>
                  <div className="article-details-content-body">
                    { article.content }
                  </div>
                  <div className="article-details-content-author" style={{ fontWeight: 'bold', marginTop: '20px' }}>
                    By:
                    {' '}
                    { `${article.user.first_name} ${article.user.last_name}` }
                  </div>
                </div>
              </div>
              <div>
                <div className="header">Comments</div>
                <div className="comments-section">
                  <div className="comments-list">
                    {
                    article.comments.map(comment => (
                      <div key={comment.id} className="each-comment d-flex">
                        <div className="comment-author d-flex align-items-center">
                          {`${comment.user.first_name} ${comment.user.last_name}`}
                          :
                        </div>
                        <div className="comment-author-text d-flex align-items-center">{comment.content}</div>
                      </div>
                    ))
                  }
                  </div>
                  <div className="comments-input-button d-flex p-2 align-items-center">
                    <Input />
                    <div className="px-2 d-flex align-items-center">
                      <Button name="Comment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null
      }

    </ContentWrapper>
  );
};

export default ArticleDetails;
