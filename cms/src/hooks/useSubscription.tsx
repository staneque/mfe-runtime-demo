import React, { useEffect, useRef } from 'react'
import PubSub from 'pubsub-js'

export const useSubscription = (topic: string, handler: () => void) => {
  const handlerRef = useRef<typeof handler>()

  useEffect(() => {
    handlerRef.current = handler
  }, [handler])

  useEffect(() => {
    const token = PubSub.subscribe(topic, (data: unknown) =>
      handlerRef.current(data)
    )

    return () => PubSub.unsubscribe(token)
  }, [])
}
