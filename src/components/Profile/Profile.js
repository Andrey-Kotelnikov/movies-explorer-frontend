import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { NAME_REGEX, EMAIL_REGEX } from '../../utils/constants';
import { FormValidation } from '../FormValidation/FormValidation';

function Profile ({openNav, loggedIn, updateProfile, handleLogout}) {
  const currentUser = React.useContext(CurrentUserContext);

  const [isSaving, setIsSaving] = React.useState(false);
  
  const [requestError, setRequestError] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  const { name, email } = currentUser.data;

  const { values, errors, isValid, handleChange, resetForm } = FormValidation();

  const { profileName, profileEmail } = values;
  

  React.useEffect(() => {
    resetForm({profileName: name, profileEmail: email})
  }, [currentUser]);



  // Обработчик сабмита
  function handleSubmit(e) {
    e.preventDefault();
    setRequestError('');
    setSuccess(false);
    
    console.log(profileName, profileEmail)
    updateProfile(profileName, profileEmail)
      .then((res) => {
        setIsSaving(false);
        setSuccess(true);
        setRequestError('Аккаунт обновлен');
      })
      .catch((err) => setRequestError(err))
    //setIsSaving(false);
  }

  // Переключение кнопки на сохранение
  function toggleButton() {
    setIsSaving(true)
  }


  /*function isDisabled() {
    if (name === nameProfile && email === emailProfile) {
      return true;
    } else {
      return !isValidInputs;
    };
  };*/

  /*function handleSubmit(e) {

    e.preventDefault();
    setErrorServer("");
    setSuccessUpdate(false)

    onUpdateProfile( nameProfile, emailProfile )
    .then((res) => {
      setSuccessUpdate(true);
      setErrorServer("Аккаунт успешно обновлен");
    })
    .then((res) => {
      resetForm();
    })
    .catch((err) => {
      setErrorServer(err);
    })
  };*/
  
  return (
    <>
      <Header openNav={openNav} loggedIn={loggedIn} />
      <main className='profile'>
        <h3 className='profile__name'>Привет, {name}!</h3>
        <form className='profile__content' name='profile' onSubmit={handleSubmit}>
          <div className='profile__input-container'>
            <article className='profile__input-title'>Имя</article>
            <input
              className='profile__input'
              type='text'
              name='profileName'
              minLength='2'
              maxLength='30'
              placeholder='Имя'
              value={values['profileName'] || ''}
              pattern={NAME_REGEX.source}
              onChange={handleChange}
              required
            />
            <span className='profile__input-error'>{errors['profileName']}</span>
          </div>
          <div className='profile__input-container'>
            <article className='profile__input-title'>E-mail</article>
            <input
              className='profile__input'
              type='email'
              name='profileEmail'
              placeholder='E-mail'
              value={values['profileEmail'] || ''}
              pattern={EMAIL_REGEX.source}
              onChange={handleChange}
              required
            />
            <span className='profile__input-error'>{errors['profileEmail']}</span>
          </div>
        </form>
        <span className={`profile__request-error ${success && 'profile__request-error_no-error'}`}>{requestError}</span>
        {!isSaving ? <button className='profile__button-edit' onClick={toggleButton}>Редактировать</button> : <button className='profile__button-save' type='submit' disabled={!isValid} onClick={handleSubmit}>Сохранить</button>}
        {!isSaving && <button className='profile__button profile__button-exit' onClick={handleLogout}>Выйти из аккаунта</button>}
      </main>
    </>
  )
}

export default Profile;