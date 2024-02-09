import { createRoot } from 'react-dom/client'
import React from 'react'

const App = () => {
  return <div>hello</div>
}

const mount = (el: HTMLElement) => {
  const root = createRoot(el)
  root.render(<App />)
}

const localRoot = document.getElementById(
  '_marketing-local-root'
) as HTMLElement

if (localRoot) {
  mount(localRoot)
}

export { mount }
