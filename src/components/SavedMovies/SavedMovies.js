import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';
import Footer from '../Footer/Footer';

function SavedMovies ({openNav}) {
  return (
    <>
      <Header openNav={openNav} />
      <SearchForm />
      <MovieCardList />
      <Footer />
    </>
  )
}

export default SavedMovies;