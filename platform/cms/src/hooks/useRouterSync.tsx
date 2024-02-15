import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface UseRouterSyncParams {
  listenEventName: string
  publishEventName: string
}

export const useRoutersSync = ({
  listenEventName,
  publishEventName,
}: UseRouterSyncParams) => {
  const location = useLocation()
  const navigate = useNavigate()

  // Subscribe to the host navigation events
  useEffect(() => {
    console.log(`Remote app subscribed to the host`, listenEventName)

    const handleNavigation = (e: CustomEvent<string>) => {
      const pathname = e.detail

      if (location.pathname === pathname) {
        return
      }

      navigate(pathname)
    }

    window.addEventListener(listenEventName, handleNavigation as EventListener)

    return () => {
      window.removeEventListener(
        listenEventName,
        handleNavigation as EventListener
      )
    }
  }, [location, listenEventName, publishEventName])

  // Notify the host
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(publishEventName, {
        detail: location.pathname,
      })
    )
  }, [location])
}
