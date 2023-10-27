import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register () {
  return (
    <div className='form__container'>
      <form className='form'>
        <Link to='/'>
          <img className='logo' src={logo} alt='Логотип'/>
        </Link>
        <h3 className='form__title'>Добро пожаловать!</h3>
        <div className='form__content'>
          <label className='form__input-container'>
            <h4 className='form__input-title'>Имя</h4>
            <input className='form__input'/>
            <span className='form__input-error'>что-то не так</span>
          </label>
          <label className='form__input-container'>
            <h4 className='form__input-title'>E-mail</h4>
            <input className='form__input'/>
            <span className='form__input-error'></span>
          </label>
          <label className='form__input-container'>
            <h4 className='form__input-title'>Пароль</h4>
            <input className='form__input'/>
            <span className='form__input-error'></span>
          </label>
        </div>
        <button className='form__button'>Зарегистрироваться</button>
        <Link to='/signin' className='form__link'>Уже зарегистрированы?<span className='form__link form__link_black'>Войти</span></Link>
      </form>
    </div>
  )
}

export default Register;