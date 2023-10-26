import './MovieCardList.css';
import MovieCard from '../MovieCard/MovieCard';

function MovieCardList () {
  return (
    <section className='movie-card-list'>
      <div className='movie-card-list__container'>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div>
      <button className='movie-card-list__button'>Еще</button>
    </section>
  )
}

export default MovieCardList;