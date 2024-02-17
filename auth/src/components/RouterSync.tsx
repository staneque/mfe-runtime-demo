import React from 'react'
import { useRoutersSync } from '../hooks/useRouterSync'

function RouterSync({ children }: { children: React.ReactNode }) {
  useRoutersSync({
    listenEventName: '@navigation.host',
    publishEventName: '@navigation.remote.auth', // TODO: extract event names to constants
  })

  return children
}

export default RouterSync
