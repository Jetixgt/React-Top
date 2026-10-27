import { useState } from 'react'
import { useUser } from '../context/useUser'

function ProfileCard({ onCreatePost }) {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [error, setError] = useState('')
  const { userName } = useUser()
  const displayName = userName.trim() || 'Без имени'

  function addPost(event) {
    event.preventDefault()
    if (!title.trim() || !text.trim()) {
      setError('Заполните заголовок и текст поста.')
      return
    }

    onCreatePost({ title: title.trim(), text: text.trim() })
    setTitle('')
    setText('')
    setError('')
  }

  return (
    <section className="profile-card">
      <div className="profile">
        <div className="avatar" aria-hidden="true">
          {displayName.charAt(0).toUpperCase()}
        </div>
        <div className="profile-info">
          <h2>{displayName}</h2>
          <p>
            <a href="https://github.com/Jetixgt?tab=repositories">@Jetixgt</a>
          </p>
        </div>
      </div>
      <p className="profile-description">Frontend-разработчик, изучаю React.</p>

      <form className="post-form" onSubmit={addPost}>
        {error && <p className="form-error" role="alert">{error}</p>}
        <input
          type="text"
          placeholder="Заголовок поста"
          aria-label="Заголовок поста"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          placeholder="Текст поста"
          aria-label="Текст поста"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Опубликовать</button>
      </form>
    </section>
  )
}

export default ProfileCard