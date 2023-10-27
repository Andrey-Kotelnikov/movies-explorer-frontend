
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login () {
  return (
    <div className='form__container'>
      <form className='form'>
        <Link to='/'>
          <img className='logo' src={logo} alt='Логотип'/>
        </Link>
        <h3 className='form__title'>Рады видеть!</h3>
        <div className='form__content'>
          <label className='form__input-container'>
            <h4 className='form__input-title'>E-mail</h4>
            <input className='form__input'/>
            <span className='form__input-error'>что-то не так</span>
          </label>
          <label className='form__input-container'>
            <h4 className='form__input-title'>Пароль</h4>
            <input className='form__input'/>
            <span className='form__input-error'></span>
          </label>
        </div>
        <button className='form__button'>Войти</button>
        <Link to='/signup' className='form__link'>Еще не зарегистрированы?<span className='form__link form__link_black'>Регистрация</span></Link>
      </form>
    </div>
  )
}

export default Login;