import { RouterProvider } from 'react-router-dom'
import { browserRouter } from './router'
import { createContext, useEffect, useState } from 'react'
import PubSub from 'pubsub-js'

export const AuthContext = createContext({ isSignedIn: false })

function App() {
  const [isSignedIn, setIsSignedIn] = useState(!!localStorage.getItem('token'))

  useEffect(() => {
    const token = PubSub.subscribe(
      'auth.change',
      (_: string, { isSignedIn }: { isSignedIn: boolean }) =>
        setIsSignedIn(isSignedIn)
    )

    return () => PubSub.unsubscribe(token)
  }, [])

  useEffect(() => {
    if (isSignedIn) {
      localStorage.setItem('token', '!QW@#$%SDW%^%$@%^ERAA$%#$%#WT')
    } else {
      localStorage.removeItem('token')
    }
  }, [isSignedIn])

  return (
    <AuthContext.Provider value={{ isSignedIn }}>
      <div className="flex flex-col h-full">
        <RouterProvider router={browserRouter} />
      </div>
    </AuthContext.Provider>
  )
}

export default App
