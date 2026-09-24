import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'

const themes = [
  { value: 'pixel', label: 'Пиксельная аркада' },
  { value: 'fantasy', label: 'Фэнтези' },
  { value: 'terminal', label: 'Терминал' },
]

function App() {
  const [theme, setTheme] = useState('pixel')

  return (
    <div className={`app theme-${theme}`}>
      <Header />
      <main>
        <div className="theme-picker">
          <label htmlFor="theme-select">Стиль оформления</label>
          <select
            id="theme-select"
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
          >
            {themes.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <ProfileCard />
      </main>
    </div>
  )
}

export default App