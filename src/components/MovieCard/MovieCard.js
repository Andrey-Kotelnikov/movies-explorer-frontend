import './MovieCard.css';
import movie from '../../images/movie.webp'

function MovieCard () {
  return (
    <section className='movie-card'>
      <div className='movie-card__image-container'>
        <img className='movie-card__image' src={movie} alt=''/>
        <button className='movie-card__save-button'>Сохранить</button>
      </div>
      <div className='movie-card__info'>
        <h3 className='movie-card__title'>33 слова о дизайне</h3>
        <article className='movie-card__duration'>1ч 17м</article>
      </div>
      
    </section>
  )
}

export default MovieCard;