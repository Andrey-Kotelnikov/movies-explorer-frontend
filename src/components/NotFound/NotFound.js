import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';




function NotFound () {
  /*const navigate = useNavigate();*/

  return (
    <div className='not-found'>
      <h3 className='not-found__title'>404</h3>
      <p className='not-found__text'>Страница не найдена</p>
      <Link to='/' className='not-found__link'>Назад</Link>
    </div>
  )
}

export default NotFound;
