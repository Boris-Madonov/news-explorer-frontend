import React, { useContext } from 'react';
import Button from '../Button';
import SearchForm from '../SearchForm';
import PageLink from '../PageLink';
import { PageContext } from '../../contexts/PageContext';
import { PlaceContext } from '../../contexts/PlaceContext';
import SavedNewsHeader from '../SavedNewsHeader';
import './index.css';
import { LogOut } from '../../images/icon';

function Header({
  loggedIn,
}) {
  const page = useContext(PageContext);
  const linkMainActive = page === "main"
    ? true
    : false;

  const linkSavedNewsActive = page === "savedNews"
    ? true
    : false;

  let headerType;

  if (page === "main") {
    headerType = "header-elements_page_main";
  } else if (page === "savedNews") {
    headerType = "header-elements_page_saved-news";
  }

  const buttonText = !loggedIn
    ? <>
        Александра
        <LogOut
          className="header__logOutIcon"
        />
      </>
    : "Авторизоваться";
  const hideLink = !loggedIn ? "" : "header__hide-link";

  return (
    <section className={`header-elements ${headerType}`}>
      <PlaceContext.Provider value="header">
        <header className="header">
          <PageLink
            linkTo="/"
            linkText="NewsExplorer"
            linkPlace="headerLogo"
            activeClassName={false}
          />
          <nav className="header__menu">
            <div className="header__menu-list">
              <PageLink
                linkTo="/"
                linkText="Главная"
                linkPlace="headerMenu"
                activeClassName={linkMainActive}
              />
            </div>
            <div className={`header__menu-list ${hideLink}`}>
              <PageLink
                linkTo="/saved-news"
                linkText="Сохранённые статьи"
                linkPlace="headerMenu"
                activeClassName={linkSavedNewsActive}
              />
            </div>
            <div className="header__menu-list">
              <Button
                buttonText={buttonText}
              />
            </div>
          </nav>
        </header>
      </PlaceContext.Provider>
      {page === "main" ? <SearchForm /> : <SavedNewsHeader />}
    </section>
  );
}

export default Header;