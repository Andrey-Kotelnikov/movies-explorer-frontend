import './Footer.css'

function Footer () {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <p className='footer__year'>© 2023</p>
        <div className='footer__links'>
          <a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
          <a className='footer__link' href='https://github.com/Andrey-Kotelnikov/movies-explorer-frontend' target='_blank' rel='noreferrer'>Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;