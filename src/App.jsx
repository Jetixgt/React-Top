import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { PostsProvider } from './context/PostsContext.jsx'
import { UserProvider } from './context/UserContext.jsx'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

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
        <PostsProvider>
          <UserProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/settings"
                element={<Settings theme={theme} onThemeChange={setTheme} themes={themes} />}
              />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </UserProvider>
        </PostsProvider>
      </main>
    </div>
  )
}

export default App