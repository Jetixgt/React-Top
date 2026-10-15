import { useContext } from 'react'
import { PostsContext } from './posts-context'

export function usePosts() {
  const context = useContext(PostsContext)
  if (context === null) {
    throw new Error('usePosts должен использоваться внутри PostsProvider.')
  }
  return context
}
