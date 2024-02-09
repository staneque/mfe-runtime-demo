import faker from 'faker'

const cartEl = document.createElement('div')
cartEl.textContent = `Total: $${faker.random.number()}`

const mount = root => root.appendChild(cartEl)

if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('cart-dev-root')

  if (root) {
    mount(root)
  }
}

export { mount }
