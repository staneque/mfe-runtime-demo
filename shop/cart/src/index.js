import faker from 'faker'

const cartEl = document.createElement('div')
cartEl.textContent = `Total: $${faker.random.number()}`
document.getElementById('cart-root').appendChild(cartEl)
