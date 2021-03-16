import React from 'react';
import About from '../About';
import Header from '../Header';
import NoResults from '../NoResults';
import Preloader from '../Preloader';
import SearchResults from '../SearchResults';


function Main({
  headerButtonClick,
  onSearch,
  articles,
  onShowMore,
  isShowPreloader,
  isShowButton,
  isShowSearchResults,
  isShowNoResults,
  onCardButtonClick,
  savedArticles,
}) {
  return (
    <>
      <Header
        headerButtonClick={headerButtonClick}
        onSearch={onSearch}
      />
      <Preloader
        isShowPreloader={isShowPreloader}
      />
      <SearchResults
        articles={articles}
        onShowMore={onShowMore}
        isShowButton={isShowButton}
        isShowSearchResults={isShowSearchResults}
        onCardButtonClick={onCardButtonClick}
        savedArticles={savedArticles}
      />
      <NoResults
        isShowNoResults={isShowNoResults}
      />
      <About />
    </>
  );
}

export default Main;