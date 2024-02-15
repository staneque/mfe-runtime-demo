import React, { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useRoutersSync } from '../hooks/useRoutersSync'
import { mount } from 'cms/Cms'
import config from '../config'

function CMS() {
  const location = useLocation()
  const refRoot = useRef<HTMLDivElement>(null)
  const isFirstRun = useRef(true)
  const remotePathnamePrefix = config.remotePathnamePrefix.CMS

  useRoutersSync({
    listenEventName: '@remoteAppNavigation',
    publishEventName: '@hostNavigation',
    remotePathnamePrefix,
  })

  useEffect(() => {
    if (!isFirstRun.current) {
      return
    }

    console.log(
      'REPLACED',
      location.pathname.replace(config.remotePathnamePrefix.CMS, '')
    )
    mount(
      refRoot.current,
      location.pathname.replace(config.remotePathnamePrefix.CMS, '')
    )

    isFirstRun.current = false
  }, [location])

  return (
    <div id="cms-mounting-point" className="flex-1 min-h-0" ref={refRoot} />
  )
}

export default CMS
