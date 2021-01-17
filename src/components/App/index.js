import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../Footer';
import About from '../About';
import './index.css';

function App() {
  return (
    <Route>
      <About />
      <Footer />
    </Route>
  );
}

export default App;
