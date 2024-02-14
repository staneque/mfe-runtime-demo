import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
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

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <div>Error</div>,
      loader: loaderRoot,
      action: actionCreateProduct,
      children: [
        {
          errorElement: <div>Error</div>,
          children: [
            { index: true, element: <Index /> },
            {
              path: '/products/:productId',
              element: <Product />,
              loader: loaderProduct,
              action: actionUpdateProduct,
            },
            {
              path: 'products/:productId/edit',
              element: <Edit />,
              loader: loaderProduct,
              action: actionEdit,
            },
            {
              path: 'products/:productId/destroy',
              action: actionDeleteProduct,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/cms',
  }
)
