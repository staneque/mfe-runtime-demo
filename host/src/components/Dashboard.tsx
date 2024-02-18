import { useEffect, useRef } from 'react'
import { useProtectedRoute } from '../hooks/useProtectedRoute'
import { mount } from 'dashboard/Dashboard'

function Dashboard() {
  // useProtectedRoute()
  const refRoot = useRef<HTMLDivElement>(null)
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (!isFirstRun.current) {
      return
    }

    mount(refRoot.current)

    isFirstRun.current = false
  }, [location])

  return <div id="dashboard-mounting-point" className="" ref={refRoot} />
}

export default Dashboard
