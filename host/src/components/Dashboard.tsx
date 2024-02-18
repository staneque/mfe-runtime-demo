import { useProtectedRoute } from '../hooks/useProtectedRoute'

function Dashboard() {
  useProtectedRoute()

  return <div>Dashboard</div>
}

export default Dashboard
