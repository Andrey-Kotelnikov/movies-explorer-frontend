import './MovieCardList.css';

import MovieCard from '../MovieCard/MovieCard';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { useResize } from '../../utils/useResize';

function MovieCardList ({ movies, saveMovie, savedMovies, deleteMovie, /*showMoreCards, isHiddenMoreButton*/ }) {
  const location = useLocation();
  const locationOfSavedMovies = location.pathname === '/saved-movies';

  const { isScreenS, isScreenM, isScreenL } = useResize();

  const [amountMovies, setAmountMovies] = React.useState(0);
  const [addedMovies, setAddedMovies] = React.useState(0);


  // Количество фильмов на странице в зависимости от ширины экрана
  React.useEffect(() => {
    if (isScreenL) {
      setAmountMovies(12);
      setAddedMovies(3);
    } else if (isScreenM) {
      setAmountMovies(8);
      setAddedMovies(2);
    } else if (isScreenS) {
      setAmountMovies(5);
      setAddedMovies(2);
    }
  }, [isScreenL, isScreenM, isScreenS]);

  // Добавление карточек по клику на Еще
  function showMoreMovies() {
    setAmountMovies(amt => amt + addedMovies)
  };

  // Условие видимости кнопки
  const isVisibleButton = movies.length > amountMovies && !locationOfSavedMovies;

  return (
    <section className='movie-card-list'>
      <div className='movie-card-list__container'>
        {movies.map((movieElement, index) => {
          if (index < amountMovies) {
            return(
              <MovieCard
                key={ locationOfSavedMovies ? movieElement.movieId : movieElement.id}
                {...movieElement}
                movie={movieElement}
                savedMovies={savedMovies}
                saveMovie={saveMovie}
                deleteMovie={deleteMovie}
                locationOfSavedMovies={locationOfSavedMovies}
              />
            );
          }
          return null;
        })}
      </div>
      {isVisibleButton && <button className='movie-card-list__button' type='button' onClick={showMoreMovies}>Еще</button>}
    </section>
  )
}

export default MovieCardList;