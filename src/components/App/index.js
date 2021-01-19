import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../Footer';
import About from '../About';
import SearchForm from '../SearchForm';
import './index.css';
import RegisterPopup from '../RegisterPopup';
import { PlaceContext } from '../../contexts/PlaceContext';
import LoginPopup from '../LoginPopup';
import InfoTooltip from '../InfoTooltip';

function App() {
  return (
    <Route>
      <SearchForm />

      <PlaceContext.Provider value="register">
        <RegisterPopup
          isOpen={false}
        />
      </PlaceContext.Provider>

      <PlaceContext.Provider value="login">
        <LoginPopup
          isOpen={false}
        />
      </PlaceContext.Provider>

      <PlaceContext.Provider value="infoTooltip">
        <InfoTooltip
          isOpen={false}
        />
      </PlaceContext.Provider>

      <About />
      <Footer />
    </Route>
  );
}

export default App;
