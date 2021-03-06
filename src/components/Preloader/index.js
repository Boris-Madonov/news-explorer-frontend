import React from 'react';
import preloaderPath from '../../images/ellipse.png'

import "./index.css"

function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__elements">
        <img
          className="preloader__circle"
          alt="Иконка прелоудера"
          src={preloaderPath}
        />
      </div>
      <p className="preloader__text">
        Идет поиск новостей...
      </p>
    </section>
  );
}

export default Preloader;