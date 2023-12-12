import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginInputs } from '../../utils/constants';
import FormInput from '../FormInput/FormInput';
import { FormValidation } from '../FormValidation/FormValidation';
import { login } from '../../utils/Auth';

function Login ({authentication, loggedIn }) {
  const [formError, setFormError] = React.useState('');

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = FormValidation();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (loggedIn) {
      navigate('/movies', {replace: true});
    }
  })

  function handleSubmit(e) {
    e.preventDefault();
    setFormError('');
    const { email, password } = values;
    authentication(email, password)
      .then(resetForm())
      .catch(err => setFormError(err));
  }

  return (
    <div className='container'>
      <form className='form' name='login' onSubmit={handleSubmit}>
        <Link to='/'>
          <img className='logo' src={logo} alt='Логотип'/>
        </Link>
        <h3 className='form__title'>Рады видеть!</h3>
        <div className='form__content'>
          {loginInputs.map((input) => (
            <FormInput key={input.id} {...input} values={values} errors={errors} handleChange={handleChange} />
          ))}
        </div>
        <span className='form__error'>{formError}</span>
        <button className='form__button' disabled={!isValid}>Войти</button>
        <div className='form__link-container'>
          <p className='form__text'>Еще не зарегистрированы?</p>
          <Link to='/signup' className='form__link'>Регистрация</Link>
        </div>
      </form>
    </div>
  )
}

export default Login;