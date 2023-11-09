import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Navigation from '../Navigation/Navigation';

import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';

import './App.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { getContent, login, register, signOut } from '../../utils/Auth';

import { useResize } from '../../utils/useResize';

import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';



function App() {

  const checkboxFromLocalStorage = JSON.parse(localStorage.getItem('checkbox')) === null ? false : JSON.parse(localStorage.getItem('checkbox'));
  

  const [isNavOpened, setIsNavOpened] = React.useState(false); // Открыт Navigation
  const [isLoading, setIsLoading] = React.useState(false) // Открыт прелоадер
  const [searchError, setSearchError] = React.useState(''); // Текст ошибки для формы поиска
  const [allMovies, setAllMovies] = React.useState([]); // Массива фильмов из стороннего api
  
  const [moviesError, setMoviesError] = React.useState('') // Текст ошибки при поиске фильмов

  const [currentUser, setCurrentUser] = React.useState({});

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [userData, setUserData] = React.useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const locationSavedMovies = location.pathname === '/saved-movies';

  
  const [savedMovies, setSavedMovies] = React.useState([]);

  const [resultMovies, setResultMovies] = React.useState([]);

  const [activeCheckbox, setActiveCheckbox] = React.useState(checkboxFromLocalStorage);




  const [isHiddenMoreButton, setIsHiddenMoreButton] = React.useState(false)
  const [initialCards, setInitialCards] = React.useState(null);
  const [addCards, setAddCards] = React.useState(null);
  const [rowCounter, setRowCounter] = React.useState(0);

  const countMoviesShow = initialCards + rowCounter * addCards;
  const moviesShow = resultMovies.slice(0, countMoviesShow);

  const { isScreenS, isScreenM, isScreenL } = useResize();


  // Проверка наличия токена
  function tokenCheck () {
    getContent().then((res) => {
      const userData = {
        name: res.data.name,
        email: res.data.email
      };
      setUserData(userData);
      setLoggedIn(true);
    })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
      }) 
  }
  
  // Запуск проверки токена при загрузке сайта
  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    if (isScreenL) {
      setInitialCards(12);
      setAddCards(3);
    } else if (isScreenM) {
      setInitialCards(8);
      setAddCards(2);
    } else if (isScreenS) {
      setInitialCards(5);
      setAddCards(2);
    }
  }, [isScreenL, isScreenM, isScreenS]);


  // Добавление карточек по клику на Еще
  function showMoreCards() {
    //console.log('еще')
    setRowCounter(row => row + 1)
  }



  // Регулятор видимости кнопки еще в зависимости от количества показанных фильмов
  React.useEffect(() => {
    setIsHiddenMoreButton(false);
    //console.log(moviesShow.length)
    //console.log(resultMovies.length)
    if (moviesShow.length === resultMovies.length) {
      setIsHiddenMoreButton(true);
    }
  }, [moviesShow, resultMovies]);








  const moviesFromLocalStorage = JSON.parse(localStorage.getItem('movies')) || [];
  /*const checkboxFromLocalStorage = localStorage.getItem('checkbox');
  console.log('чек из локал ' + checkboxFromLocalStorage)*/

  // Получение фильмов, чекбокса из localStorage
  React.useEffect(() => {
    
    setActiveCheckbox(checkboxFromLocalStorage);
    setMoviesFilteredName(moviesFromLocalStorage);
  }, []);


  
  

  // Проверка наличия токена
  function tokenCheck () {
    getContent().then((res) => {
      const userData = {
        name: res.data.name,
        email: res.data.email
      };
      setUserData(userData);
      setLoggedIn(true);
    })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
      }) 
  }
  
  // Запуск проверки токена при загрузке сайта
  React.useEffect(() => {
    tokenCheck();
  }, []);

  // Загрузка в контекст данных с сервера
  React.useEffect(() => {
    if (loggedIn) {
      console.log('эффект загрузки данных')
      mainApi.getUser()
        .then((res) => {
          setCurrentUser(res);
          console.log(res)
        })
        //.catch(err => console.log(err));
    }
  }, [loggedIn])

  
  // Регистрация
  function registration(name, email, password) {
    return register(name, email, password)
      .then((res) => {
        if (res) {
          authentication(email, password)
        }
        setCurrentUser({name, email})
      })
      //.catch(err => console.log(err));
  }

  // Аутентификация
  function authentication(email, password) {
    return login (email, password)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          navigate('/movies', {replace: true});
        }
      })
      //.catch(err => console.log(err));
  }

  // Выход из аккаунта
  function handleLogout() {
    signOut()
      .then((res) => {
        setLoggedIn(false);
        setCurrentUser({});
        setSearchError(''); // Текст ошибки для формы поиска
        setAllMovies([]); // Массива фильмов из стороннего api
        setMoviesError('') // Текст ошибки при поиске фильмов
        setSavedMovies([]);
        setResultMovies([]);
        setIsHiddenMoreButton(false);
        setInitialCards(null);
        setAddCards(null);
        setRowCounter(0);
  

        localStorage.clear();
        navigate('/', {replace: true});
      })
      .catch(err => console.log(err));
  }

  // Редактирование профиля
  function updateProfile(name, email) {
    return mainApi.updateUser({ name, email })
      .then(user => setCurrentUser(user))
      .catch(err => console.log(err));
  }

  // Открытие окна навигации
  function openNav() {
    setIsNavOpened(true);
  }

  // Закрытие окна навигации
  function closeNav() {
    setIsNavOpened(false)
  }

  // Фильтр фильмов по имени
  function filterNameMovie(movies, keyWord) {
    const moviesFilteredName = movies.filter((movie) => movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyWord.toLowerCase()));
    return moviesFilteredName;
  };

  // Фильтр фильмов по длительности
  function filterDurationMovie(movies) {
    const moviesFilteredDuration = movies.filter((movie) => movie.duration <= 40);
    return moviesFilteredDuration;
  };

  // Переключение чекбокса
  function toggleCheckbox() {
    setActiveCheckbox(!activeCheckbox);
    localStorage.setItem('checkbox', !activeCheckbox);
  }

  //console.log('чек из локал ' + checkboxFromLocalStorage);
  //console.log('чек ' + activeCheckbox);

  const [moviesFilteredName, setMoviesFilteredName] = React.useState([])

  // Обработчик поиска
  async function handleSearchSubmit(inputValue) {
    setSearchError('');
    setIsLoading(true);
    setRowCounter(0);
    let movies = [];

    try {
      if (!inputValue) {
        return setSearchError('Нужно ввести ключевое слово');
      }
      movies = await moviesApi.getMovies()
      if (movies.length === 0) {
        return setMoviesError('Ничего не найдено');
      }
      setAllMovies(movies);
      setMoviesFilteredName(filterNameMovie(movies, inputValue));
      
    } catch(err) {
      setMoviesError(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Сохранение найденных фильмов в localStorage
  React.useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(moviesFilteredName))
  })

  

  // Загрузка фильмов в зависимости от чекбокса
  React.useEffect(() => {
    if (activeCheckbox) {
      setResultMovies(filterDurationMovie(moviesFilteredName));
    } else {
      setResultMovies(moviesFilteredName);
    }
  }, [moviesFilteredName, activeCheckbox, initialCards])






  // Появление Ничего не найдено
  React.useEffect(() => {
    if (resultMovies.length === 0 && allMovies.length !== 0 && !isLoading) {
      setMoviesError("Ничего не найдено");
    }
  }, [resultMovies, allMovies]);






  // Сохранение фильма
  function saveMovie(dataMovie) {
    //console.log('save');
    mainApi.createSavedMovie(dataMovie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies])
      })
      .catch(err => console.log(err));
  }

  const [savedMoviesFilteredName, setSavedMoviesFilteredName] = React.useState([]);
  const [resultSavedMovies, setResultSavedMovies] = React.useState([]);
  const [errorSavedMovies, setErrorSavedMovies] = React.useState('');
  const [activeCheckboxOnSavedMovies, setActiveCheckboxOnSavedMovies] = React.useState(false);
  const [savedMoviesError, setSavedMoviesError] = React.useState('');

  // Загрузка сохраненных фильмов
  React.useEffect(() => {
    //console.log('save movies')
    if (locationSavedMovies) {
      mainApi.getSavedMovies()
        .then((res) => {
          //console.log(res);
          setSavedMovies(res);
          setResultSavedMovies(res);
          setSavedMoviesFilteredName(res);
        })
        .catch(err => console.log(err));
    }
  }, [locationSavedMovies]);

  // Удаление сохраненного фильма
  function deleteMovie(dataMovie) {
    console.log(dataMovie);
    mainApi.deleteMovie(dataMovie._id)
      .then((deletedMovie) => {
        setSavedMovies((movies) => movies.filter(item => item.movieId !== deletedMovie.movieId));
        setSavedMoviesFilteredName((movies) => movies.filter(item => item.movieId !== deletedMovie.movieId));
        setResultSavedMovies((movies) => movies.filter(item => item.movieId !== deletedMovie.movieId));
      })
      .catch(err => console.log(err));
  }

  


  // Обработчик поиска на странице сохраненных фильмов
  function handleSearchSubmitSavedMovies(inputValue) {
    setErrorSavedMovies('');
    if (!inputValue) {
      setErrorSavedMovies('Нужно ввести ключевое слово');
    } else {
      setSavedMoviesFilteredName(filterNameMovie(savedMovies, inputValue))
    }
  };

  // Загрузка сохраненных фильмов в зависимости от чекбокса
  React.useEffect(() => {
    if (activeCheckboxOnSavedMovies) {
      setResultSavedMovies(filterDurationMovie(savedMoviesFilteredName));
    } else {
      setResultSavedMovies(savedMoviesFilteredName);
    }
  }, [savedMoviesFilteredName, activeCheckboxOnSavedMovies ])

  // Переключение чекбокса на странице сохраненных фильмов
  function toggleCheckboxOnSavedMovies () {
    setActiveCheckboxOnSavedMovies(!activeCheckboxOnSavedMovies);
  };

   // Появление Ничего не найдено на сохраненных фильмах
   React.useEffect(() => {
    if (resultSavedMovies.length === 0 && savedMovies.length !== 0 && !isLoading) {
      setSavedMoviesError("Ничего не найдено");
    }
  }, [resultSavedMovies, savedMovies]);



  
  

  

  //console.log(currentUser)

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path='/' element={<Main openNav={openNav} loggedIn={loggedIn} />} />
        <Route path='/movies' element={
          <ProtectedRouteElement
            element={Movies}
            openNav={openNav}
            submitHandler={handleSearchSubmit}
            isLoading={isLoading}
            searchError={searchError}
            movies={moviesShow}
            moviesError={moviesError}
            loggedIn={loggedIn}
            saveMovie={saveMovie}
            savedMovies={savedMovies}
            activeCheckbox={activeCheckbox}
            toggleCheckbox={toggleCheckbox}
            showMoreCards={showMoreCards}
            isHiddenMoreButton={isHiddenMoreButton}
          />}
        />
        {/*<Route path='/movies'element={
          <Movies
            openNav={openNav}
            submitHandler={handleSearchSubmit}
            isLoading={isLoading}
            searchError={searchError}
            movies={moviesShow}
            moviesError={moviesError}
            loggedIn={loggedIn}
            saveMovie={saveMovie}
            savedMovies={savedMovies}
            activeCheckbox={activeCheckbox}
            toggleCheckbox={toggleCheckbox}
            showMoreCards={showMoreCards}
            isHiddenMoreButton={isHiddenMoreButton}
          />}
        />*/}
        <Route path='/saved-movies' element={
          <ProtectedRouteElement
            element={SavedMovies}
            openNav={openNav}
            loggedIn={loggedIn}
            savedMovies={resultSavedMovies}
            deleteMovie={deleteMovie}
            submitHandler={handleSearchSubmitSavedMovies}
            toggleCheckbox={toggleCheckboxOnSavedMovies}
            activeCheckbox={activeCheckboxOnSavedMovies}
            searchError={errorSavedMovies}
            moviesError={savedMoviesError}
          />}
        />
        <Route path='/profile' element={
          <ProtectedRouteElement
            element={Profile}
            openNav={openNav}
            loggedIn={loggedIn}
            updateProfile={updateProfile}
            handleLogout={handleLogout}
          />} 
        />
        <Route path='/signin' element={<Login authentication={authentication} />} />
        <Route path='/signup' element={<Register registration={registration} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Navigation isOpen={isNavOpened} closeNav={closeNav} />
    </CurrentUserContext.Provider>
  )
}

export default App;