import { useUser } from '../context/useUser'

function Settings({ theme, onThemeChange, themes }) {
  const { userName, setUserName } = useUser()

  return (
    <section className="page settings-page">
      <h1>Настройки</h1>
      <div className="settings-panel">
        <label htmlFor="theme-select">Стиль оформления</label>
        <select
          id="theme-select"
          value={theme}
          onChange={(event) => onThemeChange(event.target.value)}
        >
          {themes.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <label htmlFor="user-name">Имя пользователя</label>
        <input
          id="user-name"
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>
    </section>
  )
}

export default Settings
