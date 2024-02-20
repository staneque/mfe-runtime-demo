import { useEffect, useRef } from 'react'
import { mount } from 'dashboard/Dashboard'

function Dashboard() {
  const refRoot = useRef<HTMLDivElement>(null)
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (!isFirstRun.current) {
      return
    }

    mount(refRoot.current)

    isFirstRun.current = false
  }, [location])

  return (
    <div
      id="dashboard-mounting-point"
      className="overflow-auto"
      ref={refRoot}
    />
  )
}

export default Dashboard
