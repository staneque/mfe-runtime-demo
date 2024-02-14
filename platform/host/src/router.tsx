import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'

const CMSLazy = lazy(() => import('./components/СMS'))

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
        index: true,
        path: `/cms`,
        element: (
          <Suspense fallback="Loading...">
            <CMSLazy />
          </Suspense>
        ),
      },
    ],
  },
]

export const browserRouter = createBrowserRouter(routes)
