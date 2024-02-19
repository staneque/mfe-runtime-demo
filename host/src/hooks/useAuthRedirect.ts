import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../App'

export const useAuthRedirect = (wait = 0) => {
  const { isSignedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isSignedIn) {
      setTimeout(() => {
        navigate('/auth/signin')
      }, wait)
    }
  }, [isSignedIn])

  return isSignedIn
}
