import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './index.css';

function SavedNewsHeader({
  savedArticles,
}) {
  const currentUser = useContext(CurrentUserContext);

  let end1;
  let end2;
  let end3;
  let keyword3;

  const setEnd12 = () => {
    if (savedArticles.length === 0) {
      end1 = 'ых';
      end2 = 'ей';
    } else if (savedArticles.length === 1) {
      end1 = 'ая';
      end2 = 'ья';
    } else if (savedArticles.length >= 2 && savedArticles.length <= 4) {
      end1 = 'ые';
      end2 = 'ьи';
    } else if (savedArticles.length >= 5) {
      end1 = 'ых';
      end2 = 'ей';
    }
  };
  setEnd12();

  const keywords = savedArticles.map((a) => a.keyword);
  const keywordsArr = {};

  for (const keyword of keywords) {
    if (!keywordsArr[keyword]) keywordsArr[keyword] = 0;
    keywordsArr[keyword]++;
  }

  const sortedArr = Object.entries(keywordsArr).sort((a, b) => b[1] - a[1]);
  const sortedKeywords = sortedArr.map((k) => k[0]);

  const setEnd3 = () => {
    if (sortedKeywords.length - 2 < 5) {
      end3 = 'м';
    } else if (sortedKeywords.length - 2 >= 5) {
      end3 = 'и';
    }
  };
  setEnd3();

  if (sortedKeywords.length < 3) {
    keyword3 = '';
  } else if (sortedKeywords.length < 4) {
    // eslint-disable-next-line prefer-destructuring
    keyword3 = sortedKeywords[2];
  } else if (sortedKeywords.length >= 4) {
    keyword3 = `${sortedKeywords.length - 2}-${end3} другим`;
  }

  return (
    <section className="saved-news-header">
      <h2 className="saved-news-header__title">
        Сохранённые статьи
      </h2>
      <p className="saved-news-header__description">
        {currentUser.name}
        , у вас
        {' '}
        {savedArticles.length}
        {' '}
        сохранённ
        {end1}
        {' '}
        стат
        {end2}
      </p>
      <div className={`saved-news-header__keywords ${sortedKeywords.length > 0 && 'saved-news-header__keywords_show'}`}>
        По ключевым словам:&nbsp;
        <span className="saved-news-header__keywords_span">
          {sortedKeywords[0]}
        </span>
        {sortedKeywords.length === 2 ? ' и ' : ', '}
        <span className="saved-news-header__keywords_span">
          {sortedKeywords[1]}
        </span>
        {sortedKeywords.length >= 3 ? ' и ' : ''}
        <span className="saved-news-header__keywords_span">
          {keyword3}
        </span>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
