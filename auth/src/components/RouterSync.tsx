import * as React from 'react'
import { useRoutersSync } from '../hooks/useRouterSync'

function RouterSync({ children }: { children: React.ReactNode }) {
  useRoutersSync({
    listenEventName: '@navigation.host.auth',
    publishEventName: '@navigation.remote.auth',
  })

  return children
}

export default RouterSync
