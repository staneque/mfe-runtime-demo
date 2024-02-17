import * as React from 'react';
import { useRoutersSync } from '../hooks/useRouterSync'

function RouterSync({ children }: { children: React.ReactNode }) {
  useRoutersSync({
    listenEventName: '@navigation.host',
    publishEventName: '@navigation.remote.cms',
  })

  return children
}

export default RouterSync
