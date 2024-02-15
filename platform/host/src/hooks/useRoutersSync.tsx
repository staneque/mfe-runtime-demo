import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useRoutersSync = ({
  listenEventName,
  publishEventName,
  basename,
}) => {
  const location = useLocation()
  const navigate = useNavigate()

  // Subscribe to remote app navigation events
  useEffect(() => {
    console.log(
      `Host app subscribed to remote app on path ${basename}`,
      listenEventName
    )

    const handleNavigation = (e: CustomEvent<string>) => {
      const pathname = e.detail
      const newPathname = `${basename}${pathname}`

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
  }, [location, listenEventName, publishEventName, basename])

  // Notify the remote app
  useEffect(() => {
    if (location.pathname.startsWith(basename)) {
      window.dispatchEvent(
        new CustomEvent(publishEventName, {
          detail: location.pathname.replace(basename, ''),
        })
      )
    }
  }, [location])
}
