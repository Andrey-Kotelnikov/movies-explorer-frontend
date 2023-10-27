import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm () {
  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <input className='search-form__input' placeholder='Фильм'></input>
        <button className='search-form__button'>Найти</button>
        <div className='search-form__input-line'></div>
        <FilterCheckbox/>
      </div>
      <div className='search-form__line'></div>
    </section>
  )
}

export default SearchForm;