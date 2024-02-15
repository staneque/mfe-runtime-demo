import React, { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useRoutersSync } from '../hooks/useRoutersSync'
import { mount } from 'cms/Cms'
import config from '../config'

function CMS() {
  const location = useLocation()
  const refRoot = useRef<HTMLDivElement>(null)
  const isFirstRun = useRef(true)
  const basename = config.remoteBaseName.CMS

  useRoutersSync({
    listenEventName: '@remoteAppNavigation',
    publishEventName: '@hostNavigation',
    basename,
  })

  useEffect(() => {
    // useEffect runs twice in development with strict mode,
    // this renders the remote app twice into the same node
    if (!isFirstRun.current) {
      return
    }

    mount(
      refRoot.current,
      location.pathname.replace(config.remoteBaseName.CMS, '')
    )

    isFirstRun.current = false
  }, [location])

  return (
    <div id="cms-mounting-point" className="flex-1 min-h-0" ref={refRoot} />
  )
}

export default CMS
