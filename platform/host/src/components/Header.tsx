import React from 'react'
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="h-20 p-5 text-center flex shrink-0  justify-center items-center text-white bg-teal-200 red">
      <Link to="/" className="mr-4">
        Home
      </Link>

      <Link to="/cms" className="mr-auto">
        CMS
      </Link>

      <span className="flex-1">HELLO, I'M HOST</span>

      <Button
        placeholder="Login"
        variant="outlined"
        color="white"
        className="ml-auto"
      >
        Login
      </Button>
    </div>
  )
}

export default Header
