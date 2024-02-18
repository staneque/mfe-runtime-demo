import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useRoutersSync } from '../hooks/useRoutersSync'
import { useProtectedRoute } from '../hooks/useProtectedRoute'
import { mount } from 'cms/Cms'
import config from '../config'

const remotePathnamePrefix = config.remotePathnamePrefix.CMS

function CMS() {
  useProtectedRoute()

  const location = useLocation()
  const refRoot = useRef<HTMLDivElement>(null)
  const isFirstRun = useRef(true)

  useRoutersSync({
    listenEventName: '@navigation.remote.cms',
    publishEventName: '@navigation.host.cms',
    remotePathnamePrefix,
  })

  useEffect(() => {
    if (!isFirstRun.current) {
      return
    }

    mount(refRoot.current, location.pathname.replace(remotePathnamePrefix, ''))

    isFirstRun.current = false
  }, [location])

  return (
    <div id="cms-mounting-point" className="flex-1 min-h-0" ref={refRoot} />
  )
}

export default CMS
