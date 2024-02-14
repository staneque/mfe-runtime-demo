import React, { lazy, Suspense } from 'react'
import CMS from './components/СMS'
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  RouterProvider,
  Navigate,
  createBrowserRouter,
} from 'react-router-dom'
import Header from './components/Header'

const CMSLazy = lazy(() => import('./components/СMS'))

export const routes = [
  {
    path: '/',
    element: <Header />,
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

const browserRouter = createBrowserRouter(routes)

function App() {
  return (
    <div className="flex flex-col h-full">
      <RouterProvider router={browserRouter} />
      {/* <BrowserRouter>
        <Routes>
          <Route
            element={
              <>
                <Header />
                <Outlet />
              </>
            }
          >
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/cms" element={<CMS />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

export default App
