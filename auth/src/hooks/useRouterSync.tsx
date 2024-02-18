import { useEffect, useRef } from 'react'
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom'
import PubSub from 'pubsub-js'
import { routes } from '../router'

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
  const handleHostNavigationRef = useRef<(topic: string, data: string) => void>(
    () => {}
  )

  const handleHostNavigation = (topic: string, pathname: string) => {
    console.log('REMOTE AUTH RECEIVED', topic, pathname)
    if (location.pathname === pathname || !matchRoutes(routes, { pathname })) {
      return
    }

    navigate(pathname)
    console.log('REMOTE AUTH NAVIGATED', pathname)
  }

  useEffect(() => {
    handleHostNavigationRef.current = handleHostNavigation
  }, [location])

  // Subscribe to the host navigation events
  useEffect(() => {
    const token = PubSub.subscribe(
      listenEventName,
      (topic: string, pathname: string) =>
        handleHostNavigationRef.current(topic, pathname)
    )

    return () => PubSub.unsubscribe(token)
  }, [listenEventName, publishEventName])

  // Notify the host
  useEffect(() => {
    PubSub.publish(publishEventName, location.pathname)
    console.log('REMOTE AUTH PUBLISHED', publishEventName, location.pathname)
  }, [location])
}
