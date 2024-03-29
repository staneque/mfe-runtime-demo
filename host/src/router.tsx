import { lazy, Suspense } from 'react'
import { createBrowserRouter, useRouteError } from 'react-router-dom'
import Layout from './components/Layout'
import Loading from './components/Loading'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Protected from './components/Protected'

const CMSLazy = lazy(() => import('./components/СMS'))
const AuthLazy = lazy(() => import('./components/Auth'))
const DashboardLazy = lazy(() => import('./components/Dashboard'))

function ErrorBoundary() {
  const error = useRouteError()

  console.error('HOST APP', error)

  return <div>EГГОГ- HOST</div>
}

export const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: `/cms/*`,
        element: (
          <Suspense fallback={<Loading />}>
            <Protected>
              <CMSLazy />
            </Protected>
          </Suspense>
        ),
      },
      {
        path: `/auth/*`,
        element: (
          <Suspense fallback={<Loading />}>
            <AuthLazy />
          </Suspense>
        ),
      },
      {
        path: `/dashboard`,
        element: (
          <Suspense fallback={<Loading />}>
            <Protected>
              <DashboardLazy />
            </Protected>
          </Suspense>
        ),
      },
    ],
  },
]

export const browserRouter = createBrowserRouter(routes)
