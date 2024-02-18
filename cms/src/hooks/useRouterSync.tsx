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
  const handleHostNavigatonRef = useRef<(topic: string, data: string) => void>(
    () => {}
  )

  const handleHostNavigaton = (topic: string, pathname: string) => {
    console.log('REMOTE CMS RECEIVED', topic, pathname)

    if (location.pathname === pathname || !matchRoutes(routes, { pathname })) {
      return
    }

    navigate(pathname)
    console.log('REMOTE CMS NAVIGATED', pathname)
  }

  useEffect(() => {
    handleHostNavigatonRef.current = handleHostNavigaton
  }, [location])

  // Subscribe to the host navigation events
  useEffect(() => {
    const token = PubSub.subscribe(
      listenEventName,
      (topic: string, pathname: string) =>
        handleHostNavigatonRef.current(topic, pathname)
    )

    return () => PubSub.unsubscribe(token)
  }, [listenEventName, publishEventName])

  // Notify the host
  useEffect(() => {
    PubSub.publish(publishEventName, location.pathname)
    console.log('REMOTE CMS PUBLISHED', publishEventName, location.pathname)
  }, [location])
}
