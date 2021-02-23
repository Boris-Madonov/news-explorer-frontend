import React from 'react';
import './index.css';

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <h2 className="saved-news-header__title">
        Сохранённые статьи
      </h2>
      <p className="saved-news-header__description">
        Грета, у вас 5 сохранённых статей
      </p>
      <p className="saved-news-header__keywords">
        По ключевым словам: Природа, Тайга и 2-м другим
      </p>
    </section>
  );
}

export default SavedNewsHeader;