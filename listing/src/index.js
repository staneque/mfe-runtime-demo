import faker from 'faker'

const productsHTML = Array(100)
  .fill('name')
  .map(n => `<div>${faker.commerce.productName()}</div>`)
  .join('')

const productsEl = document.createElement('div')
productsEl.innerHTML = productsHTML
document.body.appendChild(productsEl)
