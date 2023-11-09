import './MovieCardList.css';

import MovieCard from '../MovieCard/MovieCard';
import { useLocation } from 'react-router-dom';

function MovieCardList ({ movies, saveMovie, savedMovies, deleteMovie, showMoreCards, isHiddenMoreButton }) {
  const location = useLocation();
  const locationOfSavedMovies = location.pathname === '/saved-movies';
  //console.log(locationOfSavedMovies);

  const isVisibleButton = !isHiddenMoreButton && !locationOfSavedMovies;
  //console.log('кнопка видна: ' + isHiddenMoreButton)
  return (
    <section className='movie-card-list'>
      <div className='movie-card-list__container'>
        {movies.map((movieElement) => (
          <MovieCard
            key={ locationOfSavedMovies ? movieElement.movieId : movieElement.id}
            movie={movieElement}
            savedMovies={savedMovies}
            
            //nameRU={movieElement.nameRU}
            //image={movieElement.image}
            
            //duration={movieElement.duration}
            
            {...movieElement}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            locationOfSavedMovies={locationOfSavedMovies}
          />
        ))}
      </div>
      {isVisibleButton && <button className='movie-card-list__button' type='button' onClick={showMoreCards}>Еще</button>}
    </section>
  )
}

export default MovieCardList;