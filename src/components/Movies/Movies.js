import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MovieCardList from '../MovieCardList/MovieCardList';
import Footer from '../Footer/Footer';

function Movies ({openNav}) {
  return (
    <>
      <Header openNav={openNav} />
      <SearchForm />
      {/*<Preloader />*/}
      <MovieCardList />
      <Footer />
    </>
  )
}

export default Movies;