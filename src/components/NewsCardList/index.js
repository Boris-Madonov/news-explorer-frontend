import React, { useContext } from 'react';
import Card from "../Card";
import cards from "../../utils/cards.json"
import { PageContext } from '../../contexts/PageContext'
import "./index.css"

function NewsCardList() {
  const page = useContext(PageContext);

  let cardListType;

  if (page === "main") {
    cardListType = "cards__list_page_main";
  } else if (page === "savedNews") {
    cardListType = "cards__list_page_saved-news";
  }

  return (
    <>
      <section className="cards">
        <ul className={`cards__list ${cardListType}`}>
          {cards.map((card) => (
            <Card
              card={card}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

export default NewsCardList;