import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import Profile from '../Profile/Profile';

import Register from '../Register/Register';
import Login from '../Login/Login';

import NotFound from '../NotFound/NotFound';

import Navigation from '../Navigation/Navigation';

import './App.css';




function App() {
  const [navOpened, setNavOpened] = React.useState(false);

  function openNav() {
    setNavOpened(true);
  }

  function closeNav() {
    setNavOpened(false)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Main openNav={openNav}/>} />
        <Route path='/movies' element={<Movies openNav={openNav} />} />
        <Route path='/saved-movies' element={<SavedMovies openNav={openNav} />} />
        <Route path='/profile' element={<Profile openNav={openNav} />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Navigation isOpen={navOpened} closeNav={closeNav} />
    </>
  )
}




export default App;
