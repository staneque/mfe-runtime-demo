import { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../App'

export const useAuthRedirect = (wait = 0) => {
  const { isSignedIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!isSignedIn) {
      setTimeout(() => {
        navigate('/auth/signin', { state: { from: location.pathname } })
      }, wait)
    }
  }, [isSignedIn])

  return isSignedIn
}
