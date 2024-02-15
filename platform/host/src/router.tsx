import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import { NavigationManager } from './components/NavigationManager'

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
        path: `/cms/*`,
        element: (
          <Suspense fallback="Loading cms...">
            <CMSLazy />
          </Suspense>
        ),
      },
    ],
  },
]

export const browserRouter = createBrowserRouter(routes)
