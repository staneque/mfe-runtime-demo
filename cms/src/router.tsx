import {
  createBrowserRouter,
  createMemoryRouter,
  useRouteError,
} from 'react-router-dom'
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
import RouterSync from './routes/RouterSync'

function ErrorBoundary() {
  const error = useRouteError()
  console.error('CMS APP', error)

  return <div>EГГОГ - CMS APP</div>
}

export const routes = [
  {
    path: '/',
    element: (
      <RouterSync>
        <Root />
      </RouterSync>
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
