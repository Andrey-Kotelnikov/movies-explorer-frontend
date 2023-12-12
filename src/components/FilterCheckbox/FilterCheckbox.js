import './FilterCheckbox.css';

function FilterCheckbox ({ activeCheckbox, toggleCheckbox }) {

  //console.log('чек внутри компонента ' + activeCheckbox)
  return (
    <div className='filter-checkbox'>
      <button className={`${activeCheckbox ? 'filter-checkbox__button' : 'filter-checkbox__button_off'}`} type='button' onClick={toggleCheckbox}></button>
      <article className='filter-checkbox__text'>Короткометражки</article>
    </div>
  )
}

export default FilterCheckbox;