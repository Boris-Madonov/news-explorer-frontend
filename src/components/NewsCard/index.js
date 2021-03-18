import React, { useContext } from 'react';
import { PageContext } from '../../contexts/PageContext';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { Bookmark, Trash } from "../../images/icon";
import './index.css';

function NewsCard({
  article,
  onCardButtonClick,
  savedArticles,
}) {
  const page = useContext(PageContext);
  const loggedIn = useContext(LoggedInContext);

  let infoTooltipText;
  let infoTooltipType;
  let newsCardKeywordType;
  let saveIconType;

  if (page === "main" && !loggedIn) {
    infoTooltipText = "Войдите, чтобы сохранять статьи";
    newsCardKeywordType = "news-card__keyword_hidden";
    saveIconType = "";
  } else if (page === "main" && loggedIn) {
    newsCardKeywordType = "news-card__keyword_hidden";

    const isArticleSaved = savedArticles.some(a => a.title === article.title);
    saveIconType = isArticleSaved
      ? "news-card__icon_saved"
      : "";
    infoTooltipText = isArticleSaved
      ? "Убрать из сохранённых"
      : "Сохранить статью";

  } else if (page === "savedNews") {
    infoTooltipText = "Убрать из сохранённых";
    newsCardKeywordType = "";
    saveIconType = "";
  }


  const dateObject = new Date (article.publishedAt);
  let month;
  const getMonth = () => {
    const a = dateObject.getMonth() + 1;
    if (a === 1) {
      return month = "января";
    } else if (a === 2) {
      return month = "февраля";
    } else if (a === 3) {
      return month = "марта";
    } else if (a === 4) {
      return month = "апреля";
    } else if (a === 5) {
      return month = "мая";
    } else if (a === 6) {
      return month = "июня";
    }  else if (a === 7) {
      return month = "июля";
    } else if (a === 8) {
      return month = "августа";
    } else if (a === 9) {
      return month = "сентября";
    } else if (a === 10) {
      return month = "октября";
    } else if (a === 11) {
      return month = "ноября";
    } else if (a === 12) {
      return month = "декабря";
    }
  }
  getMonth();

  const date = `${dateObject.getDate()} ${month}, ${dateObject.getFullYear()}`;

  const handlerButtonClick = () => {
    onCardButtonClick(article);
  };

  return (
    <li className="news-card">
      <img className="news-card__image"
        src={article.urlToImage}
        alt={article.title}
      />
      <p className="news-card__date">
        {date}
      </p>
      <div className="news-card__info">
        <h3 className="news-card__title">
          {article.title}
        </h3>
        <p className="news-card__text">
          {article.description}
        </p>
      </div>
      <p className="news-card__source">
        {article.source.name}
      </p>
      <p className={`news-card__keyword ${newsCardKeywordType}`}>
        {article.keyword}
      </p>
      <button
        className="news-card__button"
        type="button"
        onClick={handlerButtonClick}
      >
        {
          page === "main"
            ? <Bookmark className={`news-card__icon ${saveIconType}`} />
            : <Trash className="news-card__icon" />
        }
      </button>
      <p className={`news-card__infoTooltip ${infoTooltipType}`}>
        {infoTooltipText}
      </p>
      <a
        className="news-card__link"
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >
      </a>
    </li>
  );
}

export default NewsCard;