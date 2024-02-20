import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  return (
    <div className="flex flex-col h-full">
      <div className="h-20">
        <Header />
      </div>

      <Outlet />
    </div>
  )
}

export default Layout
