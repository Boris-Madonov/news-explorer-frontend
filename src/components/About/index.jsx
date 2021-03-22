import React from 'react';
import AuthorPath from '../../images/author.jpeg';
import './index.css';

function About() {
  return (
    <section className="about">
      <img className="about__image" src={AuthorPath} alt="Автор" />
      <div className="about__description">
        <h2 className="about__description-title">
          Об авторе
        </h2>
        <p className="about__description-text">
          Это блок с описанием автора проекта.
          Здесь следует указать, как вас зовут, чем вы занимаетесь,
          какими технологиями разработки владеете.
          <br />
          <br />
          Также можно рассказать о процессе обучения в Практикуме,
          чему вы тут научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </section>
  );
}

export default About;
