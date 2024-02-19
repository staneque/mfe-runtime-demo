import { useRef, useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRoutersSync } from '../hooks/useRoutersSync'
import { mount } from 'auth/Auth'
import config from '../config'
import { AuthContext } from '../App'

const remotePathnamePrefix = config.remotePathnamePrefix.Auth

function CMS() {
  const location = useLocation()
  const refRoot = useRef<HTMLDivElement>(null)
  const isFirstRun = useRef(true)
  const navigate = useNavigate()

  const { isSignedIn } = useContext(AuthContext)

  useRoutersSync({
    listenEventName: '@navigation.remote.auth',
    publishEventName: '@navigation.host.auth',
    remotePathnamePrefix,
  })

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard')
    }
  }, [isSignedIn])

  useEffect(() => {
    if (!isFirstRun.current) {
      return
    }

    mount(refRoot.current, location.pathname.replace(remotePathnamePrefix, ''))

    isFirstRun.current = false
  }, [location])

  return <div id="auth-mounting-point" className="" ref={refRoot} />
}

export default CMS
