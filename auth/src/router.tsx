import React from 'react'
import {
  Outlet,
  createBrowserRouter,
  createMemoryRouter,
  useRouteError,
} from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import RouterSync from './components/RouterSync'

function ErrorBoundary() {
  let error = useRouteError()
  console.error(error)

  return <div>EГГОГ!</div>
}

export const routes = [
  {
    path: '/',
    element: (
      <RouterSync>
        <Outlet />
      </RouterSync>
    ),
    children: [
      {
        path: '/signin',
        element: <SignIn onSignIn={() => null} />,
      },
      {
        path: '/signup',
        element: <SignUp onSignUp={() => null} />,
      },
    ],
  },
]

export const createRouter = (
  type: 'memory' | 'browser',
  initialPathname?: string
) => {
  switch (type) {
    case 'memory':
      return createMemoryRouter(routes, {
        initialEntries: [initialPathname || '/'],
      })
    case 'browser':
    default:
      return createBrowserRouter(routes)
  }
}
