import Post from '../components/Post'
import { usePosts } from '../context/usePosts'

function Home() {
  const { posts, storageError } = usePosts()

  return (
    <section className="page">
      <h1>Главная страница</h1>
      {storageError && <p className="form-error" role="alert">{storageError}</p>}
      <div className="feed">
        <h2>Лента</h2>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post key={post.id} {...post} />
          ))
        ) : (
          <p className="empty-state">Пока нет публикаций.</p>
        )}
      </div>
    </section>
  )
}

export default Home
