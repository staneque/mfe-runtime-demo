import React, { useEffect } from 'react'
import { useLocation, useNavigate, matchRoutes } from 'react-router-dom'
import { routes } from '../router'

export function NavigationManager({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()

  // Subscribe to host navigation events
  useEffect(() => {
    const handleHostNavigation = (event: CustomEvent<string>) => {
      const pathname = event.detail

      if (location.pathname === pathname || !matchRoutes(routes, { pathname }))
        navigate(pathname)
    }

    window.addEventListener(
      '[HostNavigation]',
      handleHostNavigation as EventListener
    )

    return () => {
      window.removeEventListener(
        '[HostNavigation]',
        handleHostNavigation as EventListener
      )
    }
  }, [location])

  // Dispatch events to the host
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('[RemoteAppNavigation]', { detail: location.pathname })
    )
  }, [location])

  return children
}
