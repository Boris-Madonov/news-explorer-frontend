import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPopup from '../RegisterPopup';
import { PlaceContext } from '../../contexts/PlaceContext';
import { PageContext } from '../../contexts/PageContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import LoginPopup from '../LoginPopup';
import InfoTooltip from '../InfoTooltip';
import Main from '../Main';
import Footer from '../Footer';
import SavedNews from '../SavedNews';
import { setToken, getToken, removeToken } from '../../utils/token';
import { setArticles, getArticles } from '../../utils/articles';
import { setKeyword, getKeyword } from '../../utils/keyword';
import { conflictError, badRequestError } from '../../utils/config';
import * as auth from '../../utils/auth';
import * as mainApi from '../../utils/MainApi';
import getNewsArticles from '../../utils/NewsApi';

function App() {
  // функция для удаления элементов из массива новостей
  const reduceArr = (arr) => {
    if (arr === null) {
      return [];
    }
    arr.splice(3, arr.length - 3);
    return arr;
  };

  const [registerPopupOpen, setRegisterPopupOpen] = useState(false);
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [infoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [foundArticles, setFoundArticles] = useState(reduceArr(JSON.parse(getArticles())));
  const [savedArticles, setSavedArticles] = useState([]);
  const [isShowPreloader, setShowPreloader] = useState(false);
  const [isShowButton, setShowButton] = useState(true);
  const [isShowSearchResults, setShowSearchResults] = useState(() => {
    if (JSON.parse(getArticles()) === null) {
      return false;
    } if (JSON.parse(getArticles()).length === 0) {
      return false;
    }
    return true;
  });
  const [isShowNoResults, setShowNoResults] = useState(false);
  const [formError, setFormError] = useState('');

  // обработчик нажатия кнопки "Показать еще"
  const handlerShowMoreClick = () => {
    const arr = JSON.parse(getArticles());
    const pos = foundArticles.length + 3;
    const n = arr.length - pos;

    arr.splice(pos, n);

    setFoundArticles(arr);

    if (n <= 0) {
      setShowButton(false);
    }
  };

  // открытие и закрытие модальных окон
  const closeAllPopups = () => {
    setRegisterPopupOpen(false);
    setLoginPopupOpen(false);
    setInfoTooltipPopupOpen(false);
  };

  const handlerRegisterPopupClick = () => {
    closeAllPopups();
    setRegisterPopupOpen(true);
  };

  const handlerLoginPopupClick = () => {
    closeAllPopups();
    setLoginPopupOpen(true);
  };

  const handlerInfoTooltipPopupClick = () => {
    closeAllPopups();
    setInfoTooltipPopupOpen(true);
  };

  // загрузка данных пользователя
  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getSavedArticles()])
        .then(([user, articles]) => {
          setCurrentUser(user);
          setSavedArticles(articles);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  // проверка токена пользователя
  const tokenCheck = () => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }

    auth.checkToken(jwt)
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        setLoggedIn(false);
        if (err.status === 401) {
          console.log(`Ошибка с кодом ${err.status} - Переданный токен некорректен`);
        }
        console.log(err);
      });
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  // регистрация пользователя
  const handlerRegister = (userEmail, userPassword, userName) => {
    auth.register(userEmail, userPassword, userName)
      .then(() => {
        handlerInfoTooltipPopupClick();
      })
      .catch((err) => {
        console.log(err);
        setFormError(conflictError);
      });
  };

  // авторизация пользователя
  const handlerLogin = (userEmail, userPassword) => {
    auth.authorize(userEmail, userPassword)
      .then((data) => {
        setToken(data.token);
        setLoggedIn(true);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
        setFormError(badRequestError);
      });
  };

  // выход
  const handlerLogOut = () => {
    setLoggedIn(false);
    removeToken();
  };

  // запрос новостей
  const handlerSearchNews = (searchText) => {
    setShowPreloader(true);
    setShowSearchResults(false);
    setShowNoResults(false);
    setKeyword(searchText);
    getNewsArticles(searchText)
      .then((res) => {
        setShowPreloader(false);
        if (res.articles.length === 0) {
          setShowNoResults(true);
        } else {
          setArticles(JSON.stringify(res.articles));
          setFoundArticles(reduceArr(res.articles));
          setShowSearchResults(true);
          if (res.articles.length < 3) {
            setShowButton(false);
          } else {
            setShowButton(true);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // удаление сохраненной новости
  const deleteArticle = (article) => {
    mainApi.deleteArticle(article._id)
      .then(() => {
        const newArrSavedArticles = savedArticles.filter((a) => a._id !== article._id);
        setSavedArticles(newArrSavedArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // сохранение новости
  const handlerCardButtonClick = (article) => {
    if (!loggedIn) {
      setLoginPopupOpen(true);
    } else {
      const checkArticle = savedArticles.find((a) => a.title === article.title);

      if (checkArticle !== undefined) {
        deleteArticle(checkArticle);
      } else {
        mainApi.saveArticle(article, getKeyword())
          .then((res) => {
            setSavedArticles([res, ...savedArticles]);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <LoggedInContext.Provider value={loggedIn}>
          <Switch>
            <Route exact path="/">
              <PageContext.Provider value="main">
                <Main
                  headerButtonClick={
                    loggedIn
                      ? handlerLogOut
                      : handlerLoginPopupClick
                  }
                  onSearch={handlerSearchNews}
                  articles={foundArticles}
                  onShowMore={handlerShowMoreClick}
                  isShowPreloader={isShowPreloader}
                  isShowButton={isShowButton}
                  isShowSearchResults={isShowSearchResults}
                  isShowNoResults={isShowNoResults}
                  onCardButtonClick={handlerCardButtonClick}
                  savedArticles={savedArticles}
                  setFormError={setFormError}
                  formError={formError}
                />
              </PageContext.Provider>
            </Route>

            <Route exact path="/saved-news">
              <PageContext.Provider value="savedNews">
                <SavedNews
                  headerButtonClick={handlerLogOut}
                  articles={savedArticles}
                  onCardButtonClick={deleteArticle}
                />
              </PageContext.Provider>
            </Route>
          </Switch>
        </LoggedInContext.Provider>

        <RegisterPopup
          isOpen={registerPopupOpen}
          onClose={closeAllPopups}
          onLoginPopup={handlerLoginPopupClick}
          onRegister={handlerRegister}
          setFormError={setFormError}
          formError={formError}
        />

        <LoginPopup
          isOpen={loginPopupOpen}
          onClose={closeAllPopups}
          onRegisterPopup={handlerRegisterPopupClick}
          onLogin={handlerLogin}
          setFormError={setFormError}
          formError={formError}
        />

        <InfoTooltip
          isOpen={infoTooltipPopupOpen}
          onClose={closeAllPopups}
          onLoginPopup={handlerLoginPopupClick}
        />

        <PlaceContext.Provider value="footer">
          <Footer />
        </PlaceContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
