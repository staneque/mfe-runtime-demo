import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../App'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const { isSignedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isSignedIn) {
      navigate('/auth/signin')
    }
  }, [isSignedIn])

  return <div>Dashboard</div>
}

export default Dashboard
