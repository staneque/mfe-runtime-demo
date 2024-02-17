import { Button } from '@material-tailwind/react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  return (
    <div className="h-20 p-5 text-center flex shrink-0  justify-center items-center text-white bg-teal-200 red">
      <Link to="/" className="mr-4">
        Home
      </Link>

      <Link to="/cms" className="mr-auto">
        CMS
      </Link>

      <span className="flex-1">HELLO, I'M HOST</span>

      <Link to="/auth/signin">
        <Button variant="outlined" color="white" className="ml-auto">
          {location.pathname === '/auth/signin' ? 'Sign up' : 'Sign in'}
        </Button>
      </Link>
    </div>
  )
}

export default Header
