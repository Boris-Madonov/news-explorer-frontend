import React from 'react';
import Header from '../Header';
import NewsCardList from '../NewsCardList';

function SavedNews({
  headerButtonClick,
  articles,
  onCardButtonClick,
}) {
  return (
    <>
      <Header
        headerButtonClick={headerButtonClick}
        savedArticles={articles}
      />
      <NewsCardList
        articles={articles}
        onCardButtonClick={onCardButtonClick}
      />
    </>
  );
}

export default SavedNews;