import React from 'react';
import Button from '../Button';
import NewsCardList from '../NewsCardList';
import { PlaceContext } from '../../contexts/PlaceContext'
import "./index.css"

function SearchResults() {
  return (
    <PlaceContext.Provider value="cards-list">
      <section className="search-results">
        <h2
          className="search-results__title"
        >
          Результаты поиска
        </h2>
        <NewsCardList />
        <div
          className="search-results__button"
        >
          <Button
            buttonText="Показать еще"
          />
        </div>
      </section>
    </PlaceContext.Provider>
  );
}

export default SearchResults;