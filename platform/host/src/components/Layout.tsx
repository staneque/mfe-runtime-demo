import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import config from '../config'
import { useRoutersSync } from '../hooks/useRoutersSync'

function Layout() {
  const basename = config.remoteBaseName.CMS

  useRoutersSync({
    listenEventName: '@remoteAppNavigation',
    publishEventName: '@hostNavigation',
    basename,
  })

  return (
    <div className="flex flex-col h-full">
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
