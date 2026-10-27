import Post from '../components/Post'
import ProfileCard from '../components/ProfileCard'
import { usePosts } from '../context/usePosts'
import { useUser } from '../context/useUser'

function Profile() {
  const { posts, setPosts, storageError } = usePosts()
  const { userName } = useUser()

  function addPost({ title, text }) {
    setPosts((currentPosts) => [
      ...currentPosts,
      { id: crypto.randomUUID(), title, text, author: userName.trim() || 'Без имени' },
    ])
  }

  function deletePost(id) {
    setPosts((currentPosts) => currentPosts.filter((post) => post.id !== id))
  }

  function clearPosts() {
    setPosts([])
  }

  return (
    <section className="page">
      <h1>Мой профиль</h1>
      {storageError && <p className="form-error" role="alert">{storageError}</p>}
      <ProfileCard onCreatePost={addPost} />
      <div className="feed">
        <div className="feed-heading">
          <h2>Мои публикации</h2>
          {posts.length > 0 && (
            <button className="secondary-button" type="button" onClick={clearPosts}>
              Удалить все посты
            </button>
          )}
        </div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post key={post.id} {...post} onDelete={deletePost} />
          ))
        ) : (
          <p className="empty-state">Опубликуйте первый пост.</p>
        )}
      </div>
    </section>
  )
}

export default Profile
