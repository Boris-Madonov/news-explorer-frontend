import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../Footer';
import About from '../About';
import SearchForm from '../SearchForm';
import './index.css';
import RegisterPopup from '../RegisterPopup';
import { PlaceContext } from '../../contexts/PlaceContext';

function App() {
  return (
    <Route>
      <SearchForm />
      <PlaceContext.Provider value="register">
        <RegisterPopup
          isOpen={true}
        />
      </PlaceContext.Provider>
      <About />
      <Footer />
    </Route>
  );
}

export default App;
