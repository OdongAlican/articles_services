import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentWrapper from '../components/Contentwrapper';
import PageHeader from '../components/PageHeader';
import Article from '../components/Article';
import { fetchAllArticles } from '../actions/articles';
import Modal from '../components/Modal';
import ModalForm from '../components/ModalForm';
import ArticleForm from '../components/ArticleForm';

const Articles = function () {
  const [modalCreate, setModalCreate] = useState(false);
  const [modalEdit, setmodalEdit] = useState(false);
  const [modalView, setmodalView] = useState(false);
  const dispatch = useDispatch();

  const articles = useSelector(state => state.articlesReducer.articles);
  useEffect(() => { dispatch(fetchAllArticles()); }, []);

  const displayModalCreate = () => {
    setmodalEdit(false); setModalCreate(!modalCreate); setmodalView(false);
  };

  console.log(articles, 'articles');

  console.log(modalEdit, modalView);
  return (
    <ContentWrapper>
      {modalCreate && (
      <Modal>
        <ModalForm header="Create Article" toggleModal={displayModalCreate}>
          <ArticleForm toggleModal={displayModalCreate} />
        </ModalForm>
      </Modal>
      )}
      <PageHeader header="Articles List" toggleModal={displayModalCreate} />
      <div className="w-100">
        <div className="w-100 article-grid" style={{ overflowY: 'auto', height: '500px' }}>
          {
          articles.map(article => (
            <div key={article.id}>
              <Article article={article} />
            </div>
          ))
        }
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Articles;
