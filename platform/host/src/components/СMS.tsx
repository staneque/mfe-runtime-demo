import React, { useRef, useEffect } from 'react'
import { mount } from 'cms/cms'

function CMS() {
  const refRoot = useRef<HTMLDivElement>(null)
  const refMounted = useRef(false)

  useEffect(() => {
    // useEffect runs twice in development with strict mode,
    // this renders the remote app twice into the same node
    if (!refMounted.current) {
      mount(refRoot.current)
      refMounted.current = true
    }
  }, [])

  return (
    <div id="cms-mounting-point" className="flex-1 min-h-0" ref={refRoot} />
  )
}

export default CMS
