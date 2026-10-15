import Actions from './Actions'

function Post({ id, author, title, text, onDelete }) {
  return (
    <article className="post">
      <h2>{title}</h2>
      <p className="post-text">{text}</p>
      <p className="post-author">Автор: {author}</p>
      <Actions onDelete={onDelete ? () => onDelete(id) : undefined} />
    </article>
  )
}

export default Post