import React, { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useRoutersSync } from '../hooks/useRoutersSync'
import { mount } from 'auth/Auth'
import config from '../config'

const remotePathnamePrefix = config.remotePathnamePrefix.Auth

function CMS() {
  const location = useLocation()
  const refRoot = useRef<HTMLDivElement>(null)
  const isFirstRun = useRef(true)

  useRoutersSync({
    listenEventName: '@remoteAppNavigation-auth',
    publishEventName: '@hostNavigation',
    remotePathnamePrefix,
  })

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
