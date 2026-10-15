import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <h1>SOCIAL NETWORK</h1>
      <p>for communication</p>
      <nav className="navigation" aria-label="Основная навигация">
        <NavLink className="nav-link" to="/">Главная</NavLink>
        <NavLink className="nav-link" to="/profile">Моя страница</NavLink>
        <NavLink className="nav-link" to="/settings">Настройки</NavLink>
        <NavLink className="nav-link" to="/about">О проекте</NavLink>
      </nav>
    </header>
  )
}

export default Header