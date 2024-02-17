import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PubSub from 'pubsub-js'

export const useRoutersSync = ({
  listenEventName,
  publishEventName,
  remotePathnamePrefix,
}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const handlerRef = useRef<(data: string) => void>(() => {})

  const handleNavigation = pathname => {
    const newPathname = `${remotePathnamePrefix}${pathname}`

    if (location.pathname === pathname) {
      return
    }

    navigate(newPathname)
  }

  useEffect(() => {
    handlerRef.current = handleNavigation
  }, [location])

  // Subscribe to the remote app navigation events
  useEffect(() => {
    console.log(
      `Host app subscribed to remote app on prefix ${remotePathnamePrefix}`
    )

    const token = PubSub.subscribe(
      listenEventName,
      (_: string, pathname: string) => handlerRef.current(pathname)
    )

    return () => PubSub.unsubscribe(token)
  }, [listenEventName, publishEventName])

  // Notify the remote app
  useEffect(() => {
    PubSub.publish(
      publishEventName,
      location.pathname.replace(remotePathnamePrefix, '')
    )
  }, [location])
}
