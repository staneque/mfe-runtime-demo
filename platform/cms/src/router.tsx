import React from 'react'
import {
  MemoryRouter,
  createBrowserRouter,
  createMemoryRouter,
  useRouteError,
} from 'react-router-dom'
import { NavigationManager } from './components/NavigationManager'
import Root from './routes/Root'
import Product from './routes/Product'
import Edit from './routes/EditProduct'
import Index from './routes/Index'
import { loaderRoot, actionCreateProduct } from './routes/Root'
import { actionEdit } from './routes/EditProduct'
import {
  actionDeleteProduct,
  actionUpdateProduct,
  loaderProduct,
} from './routes/Product'

function ErrorBoundary() {
  let error = useRouteError()
  console.error(error)

  return <div>EГГОГ!</div>
}

export const routes = [
  {
    path: '/',
    element: (
      <NavigationManager>
        <Root />
      </NavigationManager>
    ),
    errorElement: <ErrorBoundary />,
    loader: loaderRoot,
    action: actionCreateProduct,
    children: [
      {
        children: [
          { index: true, element: <Index /> },
          {
            path: '/products/:productId',
            element: <Product />,
            loader: loaderProduct,
            action: actionUpdateProduct,
          },
          {
            path: '/products/:productId/edit',
            element: <Edit />,
            loader: loaderProduct,
            action: actionEdit,
          },
          {
            path: '/products/:productId/destroy',
            action: actionDeleteProduct,
          },
        ],
      },
    ],
  },
]

// const memRoutes = [
//   {
//     path: '/',
//     element: <div>CMS LOL</div>,
//   },
// ]

// export const memoryRouter = createMemoryRouter(memRoutes, { basename: '/cms' })

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
