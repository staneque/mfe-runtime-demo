import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PubSub from 'pubsub-js'

export const useRoutersSync = ({
  listenEventName,
  publishEventName,
  remotePathnamePrefix,
}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const handlerRef = useRef<(topic: string, data: string) => void>(() => {})

  const handleNavigation = (topic: string, pathname: string) => {
    console.log('HOST RECEIVED', topic, pathname)
    const newPathname = `${remotePathnamePrefix}${pathname}`

    if (location.pathname === pathname) {
      return
    }

    navigate(newPathname)
    console.log('HOST NAVIGATED', pathname)
  }

  useEffect(() => {
    handlerRef.current = handleNavigation
  }, [location])

  // Subscribe to the remote app navigation events
  useEffect(() => {
    const token = PubSub.subscribe(
      listenEventName,
      (topic: string, pathname: string) => handlerRef.current(topic, pathname)
    )

    return () => PubSub.unsubscribe(token)
  }, [listenEventName, publishEventName])

  // Notify the remote app
  useEffect(() => {
    const pathname = location.pathname.replace(remotePathnamePrefix, '')

    PubSub.publish(publishEventName, pathname)

    console.log('HOST PUBLISHED', publishEventName, pathname)
  }, [location])
}
