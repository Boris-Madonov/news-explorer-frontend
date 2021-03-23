import React from 'react';
import Button from '../Button';
import NewsCardList from '../NewsCardList';
import { PlaceContext } from '../../contexts/PlaceContext';
import './index.css';

function SearchResults({
  articles,
  onShowMore,
  isShowButton,
  isShowSearchResults,
  onCardButtonClick,
  savedArticles,
}) {
  return (
    <PlaceContext.Provider value="cards-list">
      <section className={`search-results ${isShowSearchResults && 'search-results_show'}`}>
        <h2
          className="search-results__title"
        >
          Результаты поиска
        </h2>
        <NewsCardList
          articles={articles}
          onCardButtonClick={onCardButtonClick}
          savedArticles={savedArticles}
        />
        <div
          className={`search-results__button ${isShowButton && 'search-results__button_show'}`}
        >
          <Button
            buttonText="Показать еще"
            onClick={onShowMore}
          />
        </div>
      </section>
    </PlaceContext.Provider>
  );
}

export default SearchResults;
