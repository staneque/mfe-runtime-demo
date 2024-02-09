import faker from 'faker'

const productsHTML = Array(10)
  .fill('name')
  .map(_ => `<div class="product">${faker.commerce.productName()}</div>`)
  .join('')

const productsEl = document.createElement('div')
productsEl.innerHTML = productsHTML
productsEl.classList.add('products')

const mount = root => root.appendChild(productsEl)

if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('listing-dev-root')

  if (root) {
    mount(root)
  }
}

export { mount }
