import faker from 'faker'

const productsHTML = Array(10)
  .fill('name')
  .map(_ => `<div>${faker.commerce.productName()}</div>`)
  .join('')

const productsEl = document.createElement('div')
productsEl.innerHTML = productsHTML
document.getElementById('listing-root').appendChild(productsEl)
