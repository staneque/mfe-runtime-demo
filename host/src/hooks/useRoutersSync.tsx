import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useRoutersSync = ({
  listenEventName,
  publishEventName,
  remotePathnamePrefix,
}) => {
  const location = useLocation()
  const navigate = useNavigate()

  // Subscribe to the remote app navigation events
  useEffect(() => {
    console.log(
      `Host app subscribed to remote app on prefix ${remotePathnamePrefix}`
    )

    const handleNavigation = (e: CustomEvent<string>) => {
      const pathname = e.detail
      const newPathname = `${remotePathnamePrefix}${pathname}`

      if (location.pathname === newPathname) {
        return
      }

      navigate(newPathname)
    }

    window.addEventListener(listenEventName, handleNavigation as EventListener)

    return () => {
      window.removeEventListener(
        listenEventName,
        handleNavigation as EventListener
      )
    }
  }, [location, listenEventName, publishEventName, remotePathnamePrefix])

  // Notify the remote app
  useEffect(() => {
    if (location.pathname.startsWith(remotePathnamePrefix)) {
      window.dispatchEvent(
        new CustomEvent(publishEventName, {
          detail: location.pathname.replace(remotePathnamePrefix, ''),
        })
      )
    }
  }, [location])
}
