import React from 'react';
import About from '../About';
import Header from '../Header';
import NoResults from '../NoResults';
import Preloader from '../Preloader';
import SearchResults from '../SearchResults';


function Main({
  headerButtonClick,
}) {
  return (
    <>
      <Header
        headerButtonClick={headerButtonClick}
      />
      <Preloader />
      <SearchResults />
      <NoResults />
      <About />
    </>
  );
}

export default Main;