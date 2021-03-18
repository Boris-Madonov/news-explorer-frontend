import React from 'react';
import { NotFound } from '../../images/icon';
import "./index.css"

function NoResults({
  isShowNoResults,
}) {
  return (
    <section className={`not-found ${isShowNoResults && `not-found_show`}`}>
      <NotFound />
      <p className="not-found__title">
        Ничего не найдено
      </p>
      <p className="not-found__text">
        К сожалению по вашему запросу ничего не найдено.
      </p>
    </section>
  );
}

export default NoResults;