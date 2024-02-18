import App from './App.svelte'
import './index.css'

const mount = (target: HTMLElement) => {
  console.log('TARGET', target)
  new App({
    target,
  })
}

const localRoot = document.getElementById('dashboard-local-root')

if (localRoot) {
  new App({
    target: localRoot,
  })
}

export { mount }
