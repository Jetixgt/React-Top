import { useRef, useState } from 'react'
import { PostsContext } from './posts-context'

const initialPosts = [
  {
    id: 1,
    title: 'Моё первое React-приложение 🚀',
    text: 'Сегодня я изучаю React, компоненты и useState.',
    author: 'Никита',
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

function readSavedPosts() {
  try {
    const savedPosts = localStorage.getItem('posts')
    if (savedPosts === null) return { posts: initialPosts, error: '' }

    const posts = JSON.parse(savedPosts)
    if (
      !Array.isArray(posts) ||
      !posts.every(
        (post) =>
          post &&
          (typeof post.id === 'string' || typeof post.id === 'number') &&
          typeof post.title === 'string' &&
          typeof post.text === 'string' &&
          typeof post.author === 'string',
      )
    ) {
      throw new Error('Сохранённые публикации имеют неверный формат.')
    }

    return { posts, error: '' }
  } catch (error) {
    return {
      posts: initialPosts,
      error: `Не удалось загрузить сохранённые публикации: ${error.message}`,
    }
  }
}

export function PostsProvider({ children }) {
  const [savedState] = useState(readSavedPosts)
  const [posts, setPostsState] = useState(savedState.posts)
  const [storageError, setStorageError] = useState(savedState.error)
  const postsRef = useRef(savedState.posts)

  function setPosts(update) {
    const nextPosts =
      typeof update === 'function' ? update(postsRef.current) : update
    postsRef.current = nextPosts
    setPostsState(nextPosts)

    try {
      localStorage.setItem('posts', JSON.stringify(nextPosts))
      setStorageError('')
    } catch (error) {
      setStorageError(`Не удалось сохранить публикации: ${error.message}`)
    }
  }

  return (
    <PostsContext.Provider value={{ posts, setPosts, storageError }}>
      {children}
    </PostsContext.Provider>
  )
}
