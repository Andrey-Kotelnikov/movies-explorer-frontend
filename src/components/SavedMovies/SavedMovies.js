import React from 'react';
import { mainApi } from '../../utils/MainApi';
import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';
import Footer from '../Footer/Footer';

function SavedMovies ({
  openNav,
  loggedIn,
  savedMovies,
  deleteMovie,
  submitHandler,
  toggleCheckbox,
  activeCheckbox,
  searchError,
  moviesError,
}) {

  return (
    <>
      <Header openNav={openNav} loggedIn={loggedIn} />
      <SearchForm submitHandler={submitHandler} toggleCheckbox={toggleCheckbox} activeCheckbox={activeCheckbox} searchError={searchError} />
      <div className='movies__container'>
        <p className='movies__text'>{moviesError}</p>
      </div>
      <MovieCardList movies={savedMovies} savedMovies={savedMovies} deleteMovie={deleteMovie} /*moviesError={moviesError}*/ />
      <Footer />
    </>
  )
}

export default SavedMovies;