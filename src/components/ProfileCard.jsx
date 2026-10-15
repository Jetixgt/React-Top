import { useState } from 'react'

function ProfileCard({ onCreatePost }) {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [error, setError] = useState('')

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
        <div className="avatar">V</div>
        <div className="profile-info">
          <h2>Виктор</h2>
          <p>https://github.com/Jetixgt/React-Top</p>
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