import { useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import PubSub from 'pubsub-js'

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
  const handlerRef = useRef<(data: string) => void>(() => {})

  const handleNavigation = (pathname: string) => {
    if (location.pathname === pathname) {
      return
    }

    navigate(pathname)
  }

  useEffect(() => {
    handlerRef.current = handleNavigation
  }, [location])

  // Subscribe to the host navigation events
  useEffect(() => {
    console.log(`Remote app subscribed to the host`, listenEventName)

    const token = PubSub.subscribe(
      listenEventName,
      (_: string, pathname: string) => handlerRef.current(pathname)
    )

    return () => PubSub.unsubscribe(token)
  }, [listenEventName, publishEventName])

  // Notify the host
  useEffect(() => {
    PubSub.publish(publishEventName, location.pathname)
  }, [location])
}
