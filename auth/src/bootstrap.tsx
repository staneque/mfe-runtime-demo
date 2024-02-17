import * as ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider } from 'react-router-dom'
import { createRouter } from './router'
import './styles.css'

const render = (el: HTMLElement, router: ReturnType<typeof createRouter>) => {
  ReactDOM.createRoot(el).render(
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

const localRoot = document.getElementById('auth-local-root')

if (localRoot) {
  render(localRoot, createRouter('browser'))
}

const mount = (el: HTMLElement, initialPathname: string) => {
  const router = createRouter('memory', initialPathname)

  render(el, router)
}

export { mount }
