import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import RegisterPopup from '../RegisterPopup';
import { PlaceContext } from '../../contexts/PlaceContext';
import { PageContext } from '../../contexts/PageContext';
import LoginPopup from '../LoginPopup';
import InfoTooltip from '../InfoTooltip';
import Main from '../Main';
import Footer from '../Footer';
import SavedNews from '../SavedNews';

function App() {
  const [registerPopupOpen, setRegisterPopupOpen] = useState(false);
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [infoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);

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

  return (
    <>
      <Route exact path="/">
        <PageContext.Provider value="main">
          <Main
            onLoginPopup={handlerLoginPopupClick}
          />
        </PageContext.Provider>
      </Route>

      <Route path="/saved-news">
        <PageContext.Provider value="savedNews">
          <SavedNews />
        </PageContext.Provider>
      </Route>

      <RegisterPopup
        isOpen={registerPopupOpen}
        onClose={closeAllPopups}
        onLoginPopup={handlerLoginPopupClick}
      />

      <LoginPopup
        isOpen={loginPopupOpen}
        onClose={closeAllPopups}
        onRegisterPopup={handlerRegisterPopupClick}
      />

      <InfoTooltip
        isOpen={infoTooltipPopupOpen}
        onClose={closeAllPopups}
        onLoginPopup={handlerLoginPopupClick}
      />

      <PlaceContext.Provider value="footer">
        <Footer />
      </PlaceContext.Provider>
    </>
  );
}

export default App;
