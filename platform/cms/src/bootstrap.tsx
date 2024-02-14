import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider } from 'react-router-dom'
import { createRouter } from './router'
import './styles.css'

const mount = (el: HTMLElement, router: ReturnType<typeof createRouter>) => {
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
  const router = createRouter('browser')
  mount(localRoot, router)
}

const router = createRouter('memory', '/cms')
const mountMemoryRouter = (el: HTMLElement) => mount(el, router)

export { mountMemoryRouter as mount }
