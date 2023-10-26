import './Register.css';
import logo from '../../images/logo.svg';

function Register () {
  return (
    <div className='form__container'>
      <form className='form'>
        <img className='logo' src={logo} alt='Логотип'/>
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
        <a className='form__link'>Уже зарегистрированы?<span className='form__link form__link_black'>Войти</span></a>
      </form>
    </div>
  )
}

export default Register;