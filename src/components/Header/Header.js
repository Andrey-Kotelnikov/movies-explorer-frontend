import './Header.css';
import logo from '../../images/logo.svg';
import LinkProfile from '../LinkProfile/LinkProfile';
import Navigation from '../Navigation/Navigation';
import { Link, NavLink } from 'react-router-dom';
const isLoggedIn = true;

function Header ({ }) {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='logo' src={logo} alt='Логотип'/>
      </Link>
      {/*<div className='header__container'>*/}
      {isLoggedIn ? (
        <>
          <div className='header__container'>
            <nav className='header__nav'>
              <NavLink className={({isActive}) => `header__link ${isActive ? 'header__link_active' : '' }`} to='movies'>Фильмы</NavLink>
              <NavLink className={({isActive}) => `header__link ${isActive ? 'header__link_active' : '' }`} to='/saved-movies'>Сохранённые фильмы</NavLink>
            </nav>
            <LinkProfile />
          </div>
          <div className='header__burger-button'></div>
        </>
        
      ) : (
        <div className='header__container'>
          <nav className='header__auth'>
            <Link to='/signup' className='header__auth-button'>Регистрация</Link>
            <Link to='/signin' className='header__auth-button header__auth-button_major'>Войти</Link>
          </nav>

        </div>
      )}
      {/*</div>*/}
    </header>
  )
}

export default Header;