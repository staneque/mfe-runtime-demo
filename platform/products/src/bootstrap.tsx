import * as ReactDOM from 'react-dom/client'
import React from 'react'
import Root from './routes/Root'
import Product from './routes/Product'
import Edit from './routes/Edit'
import Index from './routes/Index'
import '../tailwind.config'
import './styles.css'

import { ThemeProvider } from '@material-tailwind/react'

import {
  loaderRoot,
  loaderProduct,
  actionCreateProduct,
  actionEdit,
  actionDeleteProduct,
  actionUpdateProduct,
} from './api/loaders'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Button } from '@material-tailwind/react'

const router = createBrowserRouter([
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
])

const mount = (el: HTMLElement) => {
  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  )
}

const localRoot = document.getElementById('products-local-root') as HTMLElement

if (localRoot) {
  console.log('found root', localRoot)
  mount(localRoot)
}

export { mount }
