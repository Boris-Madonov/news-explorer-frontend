import React from 'react';
import { Route } from 'react-router-dom';
import './index.css';
import RegisterPopup from '../RegisterPopup';
import { PlaceContext } from '../../contexts/PlaceContext';
import { PageContext } from '../../contexts/PageContext';
import LoginPopup from '../LoginPopup';
import InfoTooltip from '../InfoTooltip';
import Main from '../Main';
import Footer from '../Footer';
import SavedNews from '../SavedNews';

function App() {
  return (
    <>
      <Route exact path="/">
        <PageContext.Provider value="main">
          <Main />
        </PageContext.Provider>
      </Route>

      <Route path="/saved-news">
        <PageContext.Provider value="savedNews">
          <SavedNews />
        </PageContext.Provider>
      </Route>

      <RegisterPopup
        isOpen={false}
      />

      <LoginPopup
        isOpen={false}
      />

      <InfoTooltip
        isOpen={false}
      />

      <PlaceContext.Provider value="footer">
        <Footer />
      </PlaceContext.Provider>
    </>
  );
}

export default App;
