import { useContext } from 'react'
import { UserContext } from './user-context'

export function useUser() {
  const context = useContext(UserContext)

  if (context === null) {
    throw new Error('useUser должен использоваться внутри UserProvider.')
  }

  return context
}
