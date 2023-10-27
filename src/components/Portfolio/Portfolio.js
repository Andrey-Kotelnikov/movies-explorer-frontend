import './Portfolio.css';

function Portfolio () {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Порфолио</h2>
      <ul className='portfolio__sitelist'>
        <li className='portfolio__site'>
          <a className='portfolio__link' href='https://andrey-kotelnikov.github.io/how-to-learn/' target='_blank' rel='noreferrer'>Статичный сайт</a>
        </li>
        <li className='portfolio__site'>
          <a className='portfolio__link' href='https://andrey-kotelnikov.github.io/russian-travel/' target='_blank' rel='noreferrer'>Адаптивный сайт</a>
        </li>
        <li className='portfolio__site'>
          <a className='portfolio__link' href='https://andrey-kotelnikov.github.io/mesto-react/' target='_blank' rel='noreferrer'>Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;