import React from 'react';
import Header from '../Header';
import NewsCardList from '../NewsCardList';

function SavedNews({
  headerButtonClick,
}) {
  return (
    <>
      <Header
        headerButtonClick={headerButtonClick}
      />
      <NewsCardList />
    </>
  );
}

export default SavedNews;