import { useState } from 'react'

function Actions({ onDelete }) {
  const [likes, setLikes] = useState(0)
  const [reposts, setReposts] = useState(0)

  function resetReactions() {
    setLikes(0)
    setReposts(0)
  }

  return (
    <div className="actions">
      <button
        type="button"
        onClick={() => setLikes((value) => value + 1)}
      >
        ❤️ {likes}
      </button>

      <button
        type="button"
        onClick={() => setReposts((value) => value + 1)}
      >
        🔁 {reposts}
      </button>

      <button type="button" onClick={resetReactions}>
       Сбросить
      </button>

      {onDelete && (
        <button
          type="button"
          className="delete-button"
          onClick={onDelete}
        >
          Удалить
        </button>
      )}
    </div>
  )
}

export default Actions