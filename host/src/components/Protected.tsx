import Loading from './Loading'
import { useAuthRedirect } from '../hooks/useAuthRedirect'

function Protected({ children }: { children: React.ReactNode }) {
  const isSignedIn = useAuthRedirect(800)

  return isSignedIn ? children : <Loading />
}

export default Protected
