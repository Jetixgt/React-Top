import { useState } from 'react'
import Post from './Post'

const initialPosts = [
  {
    id: 1,
    title: 'Моё первое React-приложение 🚀',
    text: 'Сегодня я изучаю React, компоненты и useState.',
    author: 'Виктор',
  },
  {
    id: 2,
    title: 'Изучаем props',
    text: 'Props позволяют передавать данные между компонентами.',
    author: 'Алексей',
  },
  {
    id: 3,
    title: 'React становится интереснее',
    text: 'Постепенно собираем настоящее приложение.',
    author: 'Мария',
  },
]

function ProfileCard() {
  const [posts, setPosts] = useState(initialPosts)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  function addPost(event) {
    event.preventDefault()
    if (!title.trim() || !text.trim()) return

    setPosts((currentPosts) => [
      ...currentPosts,
      {
        id: crypto.randomUUID(),
        title: title.trim(),
        text: text.trim(),
        author: 'Виктор',
      },
    ])
    setTitle('')
    setText('')
  }

  function deletePost(id) {
    setPosts((currentPosts) => currentPosts.filter((post) => post.id !== id))
  }

  return (
    <section className="profile-card">
      <div className="profile">
        <div className="avatar">V</div>
        <div className="profile-info">
          <h2>Виктор</h2>
          <p>@victor_react</p>
        </div>
      </div>

      <form className="post-form" onSubmit={addPost}>
        <input
          type="text"
          placeholder="Заголовок поста"
          aria-label="Заголовок поста"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <textarea
          placeholder="Текст поста"
          aria-label="Текст поста"
          value={text}
          onChange={(event) => setText(event.target.value)}
          required
        />
        <button type="submit">Опубликовать</button>
      </form>

      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          text={post.text}
          author={post.author}
          onDelete={() => deletePost(post.id)}
        />
      ))}
      {posts.length === 0 && <p className="empty-state">Публикаций пока нет.</p>}
    </section>
  )
}

export default ProfileCard