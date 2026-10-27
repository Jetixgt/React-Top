import { useState } from 'react'
import { UserContext } from './user-context'

export function UserProvider({ children }) {
  const [userName, setUserName] = useState('Никита')

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  )
}
