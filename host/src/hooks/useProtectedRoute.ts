import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../App'

export const useProtectedRoute = () => {
  const { isSignedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isSignedIn) {
      navigate('/auth/signin')
    }
  }, [isSignedIn])

  return isSignedIn
}
