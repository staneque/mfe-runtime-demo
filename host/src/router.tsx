import { lazy, Suspense } from 'react';
import { createBrowserRouter, useRouteError } from 'react-router-dom'
import Layout from './components/Layout'

const CMSLazy = lazy(() => import('./components/СMS'))
const AuthLazy = lazy(() => import('./components/Auth'))

function ErrorBoundary() {
  let error = useRouteError()

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
        element: <h1>HOME</h1>,
      },
      {
        path: `/cms/*`,
        element: (
          <Suspense fallback="Loading cms...">
            <CMSLazy />
          </Suspense>
        ),
      },
      {
        path: `/auth/*`,
        element: (
          <Suspense fallback="Loading auth...">
            <AuthLazy />
          </Suspense>
        ),
      },
    ],
  },
]

export const browserRouter = createBrowserRouter(routes)
