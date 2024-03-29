import React, { useContext, useState } from 'react';
import Button from '../Button';
import SearchForm from '../SearchForm';
import PageLink from '../PageLink';
import { PageContext } from '../../contexts/PageContext';
import { PlaceContext } from '../../contexts/PlaceContext';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import SavedNewsHeader from '../SavedNewsHeader';
import { CloseIcon, LogOut, MenuIcon } from '../../images/icon';
import './index.css';

function Header({
  headerButtonClick,
  onSearch,
  savedArticles,
  setFormError,
  formError,
}) {
  const [dropDown, setDropDown] = useState('');
  const [headerType, setHeaderType] = useState('');
  const [menuListType, setMenuListType] = useState('');
  const page = useContext(PageContext);
  const loggedIn = useContext(LoggedInContext);
  const currentUser = useContext(CurrentUserContext);
  const linkMainActive = page === 'main';

  const linkSavedNewsActive = page === 'savedNews';

  let headerElementsType;
  let dropDownTheme;
  let headerTypeDropDown;
  let menuListTheme;

  if (page === 'main') {
    headerElementsType = 'header-elements_page_main';
    dropDownTheme = 'header__menu-dropdown_theme_white';
    headerTypeDropDown = 'header_theme_dark';
    menuListTheme = 'header__menu-list_theme_dark';
  } else if (page === 'savedNews') {
    headerElementsType = 'header-elements_page_saved-news';
    dropDownTheme = 'header__menu-dropdown_theme_dark';
    headerTypeDropDown = 'header_theme_white';
    menuListTheme = 'header__menu-list_theme_white';
  }

  const buttonText = loggedIn
    ? (
      <>
        {currentUser.name}
        <LogOut
          className="header__logOutIcon"
        />
      </>
    )
    : 'Авторизоваться';
  const hideLink = loggedIn ? '' : 'header__hide-link';
  const dropDownIcon = dropDown === ''
    ? (
      <MenuIcon
        className="header__menu-dropdown-icon"
      />
    )
    : (
      <CloseIcon
        className="header__menu-dropdown-icon"
      />
    );

  const handlerDropDownButton = () => {
    if (dropDown === '') {
      setDropDown('header__menu_show');
      setHeaderType(headerTypeDropDown);
      setMenuListType(menuListTheme);
    } else {
      setDropDown('');
      setHeaderType('');
      setMenuListType('');
    }
  };

  return (
    <section className={`header-elements ${headerElementsType}`}>
      <PlaceContext.Provider value="header">
        <header
          className={`header ${headerType}`}
        >
          <PageLink
            linkTo="/"
            linkText="NewsExplorer"
            linkPlace="headerLogo"
            activeClassName={false}
          />
          <button
            className={`header__menu-dropdown ${dropDownTheme}`}
            onClick={handlerDropDownButton}
            type="button"
          >
            {dropDownIcon}
          </button>
          <nav className={`header__menu ${dropDown}`}>
            <div
              className={`header__menu-list ${menuListType}`}
            >
              <PageLink
                linkTo="/"
                linkText="Главная"
                linkPlace="headerMenu"
                activeClassName={linkMainActive}
              />
            </div>
            <div
              className={`header__menu-list ${hideLink} ${menuListType}`}
            >
              <PageLink
                linkTo="/saved-news"
                linkText="Сохранённые статьи"
                linkPlace="headerMenu"
                activeClassName={linkSavedNewsActive}
              />
            </div>
            <div
              className={`header__menu-list ${menuListType}`}
            >
              <Button
                buttonText={buttonText}
                onClick={headerButtonClick}
              />
            </div>
          </nav>
        </header>
      </PlaceContext.Provider>
      {
        page === 'main'
          ? (
            <SearchForm
              onSearch={onSearch}
              setFormError={setFormError}
              formError={formError}
            />
          )
          : (
            <SavedNewsHeader
              savedArticles={savedArticles}
            />
          )
      }
    </section>
  );
}

export default Header;
