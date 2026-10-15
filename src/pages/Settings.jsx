function Settings({ theme, onThemeChange, themes }) {
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
      </div>
    </section>
  )
}

export default Settings
