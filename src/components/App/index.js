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
import ProtectedRoute from '../ProtectedRoute'
import { setToken, getToken, removeToken } from '../../utils/token';
import * as auth from '../../utils/auth';
import * as MainApi from '../../utils/MainApi';

function App() {
  const [registerPopupOpen, setRegisterPopupOpen] = useState(false);
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [infoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  // открытие и закрытие модальных окон
  const closeAllPopups = () => {
    setRegisterPopupOpen(false);
    setLoginPopupOpen(false);
    setInfoTooltipPopupOpen(false);
  }

  const handlerRegisterPopupClick = () => {
    closeAllPopups();
    setRegisterPopupOpen(true);
  }

  const handlerLoginPopupClick = () => {
    closeAllPopups();
    setLoginPopupOpen(true);
  }

  const handlerInfoTooltipPopupClick = () => {
    closeAllPopups();
    setInfoTooltipPopupOpen(true);
  }

  // загрузка данных пользователя
  useEffect(() => {
    if (loggedIn) {
      new Promise((res) => {
        res(MainApi.getUserInfo());
      })
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  // проверка токена пользователя
  const tokenCheck = () => {
    const jwt = getToken('jwt');

    if(!jwt) {
      return;
    }

    auth.checkToken(jwt)
    .then(() => {
      setLoggedIn(true);
    })
    .catch((err) => {
      setLoggedIn(false);
      if(err.status === 401) {
        console.log(`Ошибка с кодом ${err.status} - Переданный токен некорректен`);
      }
      console.log(err);
    });
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  // регистрация пользователя
  const handleRegister = (userEmail, userPassword, userName) => {
    auth.register(userEmail, userPassword, userName)
      .then(() => {
        handlerInfoTooltipPopupClick();
      })
      .catch((err) => {
        if(err.status === 400) {
          console.log(`Ошибка с кодом ${err.status} - не корректно заполнено одно из полей`);
        } else {
          console.log(err);
        }
      });
  };

  // авторизация пользователя
  const handleLogin = (userEmail, userPassword) => {
    auth.authorize(userEmail, userPassword)
    .then((data) => {
      setToken(data.token)
      setLoggedIn(true);
      closeAllPopups();
    })
    .catch((err) => {
      if(err.status === 400) {
        console.log(`Ошибка с кодом ${err.status} - не передано одно из полей`);
      } else if(err.status === 401) {
        console.log(`Ошибка с кодом ${err.status} - пользователь с email не найден`);
      } else {
        console.log(err);
      }
    });
  };

  // выход
  const handleLogOut = () => {
    setLoggedIn(false);
    removeToken('jwt');
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
                      ? handleLogOut
                      : handlerLoginPopupClick
                  }
                />
              </PageContext.Provider>
            </Route>

            <ProtectedRoute exact path="/saved-news" loggedIn={loggedIn}>
              <PageContext.Provider value="savedNews">
                  <SavedNews
                    headerButtonClick={handleLogOut}
                  />
                </PageContext.Provider>
            </ProtectedRoute>
          </Switch>
        </LoggedInContext.Provider>

        <RegisterPopup
          isOpen={registerPopupOpen}
          onClose={closeAllPopups}
          onLoginPopup={handlerLoginPopupClick}
          onRegister={handleRegister}
        />

        <LoginPopup
          isOpen={loginPopupOpen}
          onClose={closeAllPopups}
          onRegisterPopup={handlerRegisterPopupClick}
          onLogin={handleLogin}
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
