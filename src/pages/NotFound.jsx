import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="page info-panel">
      <h1>Страница не найдена</h1>
      <p>Такой страницы нет.</p>
      <Link to="/">Вернуться на главную</Link>
    </section>
  )
}

export default NotFound
