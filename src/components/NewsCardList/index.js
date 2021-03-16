import React, { useContext } from 'react';
import NewsCard from "../NewsCard";
import { PageContext } from '../../contexts/PageContext'
import "./index.css"

function NewsCardList({
  articles,
  onCardButtonClick,
  savedArticles,
}) {
  const page = useContext(PageContext);

  let sectionShow;
  let newsCardListType;

  if (page === "main") {
    sectionShow = "news-cards_show"
    newsCardListType = "news-cards__list_page_main";
  } else if (page === "savedNews") {
    sectionShow = articles.length === 0
      ? ""
      : "news-cards_show";
    newsCardListType = "news-cards__list_page_saved-news";
  }

  return (
    <>
      <section className={`news-cards ${sectionShow}`}>
        <ul className={`news-cards__list ${newsCardListType}`}>
          {articles.map((article) => (
            <NewsCard
              key={article.title}
              article={article}
              onCardButtonClick={onCardButtonClick}
              savedArticles={savedArticles}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

export default NewsCardList;