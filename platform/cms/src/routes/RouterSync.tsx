import React from 'react'
import { useRoutersSync } from '../hooks/useRouterSync'

function RouterSync({ children }: { children: React.ReactNode }) {
  useRoutersSync({
    listenEventName: '@hostNavigation',
    publishEventName: '@remoteAppNavigation',
  })

  return children
}

export default RouterSync
