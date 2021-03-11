import React, { useContext } from 'react';
import { PageContext } from '../../contexts/PageContext'
import { Bookmark, Trash } from "../../images/icon";
import './index.css';

function Card({
  loggedIn,
  card,
}) {
  const page = useContext(PageContext);

  let infoTooltipText;
  let infoTooltipType;
  let deleteIconType;
  let saveIconType;
  let cardKeywordType;

  if (page === "main" && !loggedIn) {
    infoTooltipText = "Войдите, чтобы сохранять статьи";
    deleteIconType = "card__hide-button";
    saveIconType = "";
    cardKeywordType = "card__keyword_hidden"
  } else if (page === "main" && loggedIn) {
    infoTooltipText = ""
    deleteIconType = "card__hide-button";
    saveIconType = "";
    cardKeywordType = "card__keyword_hidden"
  } else if (page === "savedNews") {
    infoTooltipText = "Убрать из сохранённых"
    deleteIconType = "";
    saveIconType = "card__hide-button";
    cardKeywordType = ""
  }

  return (
    <li className="card">
      <img className="card__image"
        src={card.image}
        alt={card.title}
      />
      <p className="card__date">
        {card.date}
      </p>
      <div className="card__info">
        <h3 className="card__title">
          {card.title}
        </h3>
        <p className="card__text">
          {card.text}
        </p>
      </div>
      <p className="card__source">
        {card.source}
      </p>
      <p className={`card__keyword ${cardKeywordType}`}>
        {card.keyword}
      </p>
      <button
        className="card__button"
        type="button"
      >
        <Trash
          className={`card__icon ${deleteIconType}`}
        />
        <Bookmark
          className={`card__icon ${saveIconType}`}
        />
      </button>
      <p className={`card__infoTooltip ${infoTooltipType}`}>
        {infoTooltipText}
      </p>
    </li>
  );
}

export default Card;