import { NavLink } from 'react-router-dom';
import './Navigation.css';
import LinkProfile from '../LinkProfile/LinkProfile';

function Navigation ({isOpen, closeNav}) {
  return (
    <div className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>
      <div className='navigation__container'>
        <button className='navigation__close-button' type='button' onClick={closeNav}></button>
        <nav className='navigation__links'>
          <NavLink to='/' className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : '' }`}>Главная</NavLink>
          <NavLink to='/movies' className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : '' }`}>Фильмы</NavLink>
          <NavLink to='/saved-movies' className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : '' }`}>Сохраненные фильмы</NavLink>
        </nav>
        <LinkProfile />
      </div>
    </div>
  )
}

export default Navigation;