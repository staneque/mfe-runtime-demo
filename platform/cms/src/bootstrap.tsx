import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './styles.css'

const mount = (el: HTMLElement) => {
  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  )
}

const localRoot = document.getElementById('products-local-root')

if (localRoot) {
  mount(localRoot)
}

export { mount }
