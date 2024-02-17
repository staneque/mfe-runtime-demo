import React from 'react'
import { useRoutersSync } from '../hooks/useRouterSync'

function RouterSync({ children }: { children: React.ReactNode }) {
  useRoutersSync({
    listenEventName: '@hostNavigation',
    publishEventName: '@remoteAppNavigation-cms',
  })

  return children
}

export default RouterSync
