import { Button } from '@material-tailwind/react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AuthContext } from '../App'
import { useContext } from 'react'
import PubSub from 'pubsub-js'

interface MenuItem {
  to: string
  children: React.ReactNode
  className?: string
}

function MenuItem({ to, children, className = '' }: MenuItem) {
  const linkClass = `mr-4 px-5 h-full flex justify-center items-center ${className}`
  const linkClassActive = `${'bg-teal-300'} ${linkClass}`

  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? linkClassActive : linkClass)}
    >
      {children}
    </NavLink>
  )
}

function Header() {
  const { isSignedIn } = useContext(AuthContext)
  const location = useLocation()

  const ROUTE_SIGN_IN = '/auth/signin'

  const handleSignOut = () => {
    if (isSignedIn) {
      PubSub.publish('auth.change', { isSignedIn: false })
    }
  }

  return (
    <div className="h-20 px-20 text-center flex shrink-0  justify-center items-center text-white bg-teal-200 red">
      <MenuItem to="/">Home</MenuItem>

      <MenuItem to="/cms" className="mr-4">
        CMS
      </MenuItem>

      {isSignedIn && (
        <MenuItem to="/dashboard" className="mr-auto">
          Dashboard
        </MenuItem>
      )}

      <h1 className="flex-1">HELLO, IM YOUR HOST</h1>

      {location.pathname !== ROUTE_SIGN_IN && (
        <Link to={isSignedIn ? '/' : ROUTE_SIGN_IN}>
          <Button
            variant="outlined"
            color="white"
            className="ml-auto"
            onClick={handleSignOut}
          >
            {isSignedIn ? 'Logout' : 'Sign in'}
          </Button>
        </Link>
      )}
    </div>
  )
}

export default Header
