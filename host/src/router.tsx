import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'

const CMSLazy = lazy(() => import('./components/СMS'))
const AuthLazy = lazy(() => import('./components/Auth'))

export const routes = [
  {
    path: '/',
    element: <Layout />,
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
