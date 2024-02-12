import * as ReactDOM from 'react-dom/client'
import React from 'react'
import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import '../tailwind.config'
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
  console.log('found root', localRoot)
  mount(localRoot)
}

export { mount }
