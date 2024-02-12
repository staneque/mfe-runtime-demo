// localForage is a fast and simple storage library for JavaScript.
// localForage improves the offline experience of your web app by
// using asynchronous storage (IndexedDB or WebSQL) with a simple, localStorage-like API.
import localforage from 'localforage'
/* This follows a simple and sensible (user friendly) algorithm that makes it easy for you to filter 
and sort a list of items based on given input. 
Items are ranked based on sensible criteria that result in a better user experience.

To explain the ranking system, I'll use countries as an example:

CASE SENSITIVE EQUALS: Case-sensitive equality trumps all. These will be first. (ex. France would match France, but not france)
EQUALS: Case-insensitive equality (ex. France would match france)
STARTS WITH: If the item starts with the given value (ex. Sou would match South Korea or South Africa)
WORD STARTS WITH: If the item has multiple words, then if one of those words starts with the given value (ex. Repub would match Dominican Republic)
CONTAINS: If the item contains the given value (ex. ham would match Bahamas)
ACRONYM: If the item's acronym is the given value (ex. us would match United States)
SIMPLE MATCH: If the item has letters in the same order as the letters of the given value 
(ex. iw would match Zimbabwe, but not Kuwait because it must be in the same order). 
Furthermore, if the item is a closer match, it will rank higher 
(ex. ua matches Uruguay more closely than United States of America, therefore Uruguay will be ordered before United States of America) */
import { matchSorter } from 'match-sorter'

import sortBy from 'sort-by'

export async function getProducts(query = '') {
  await fakeNetwork(`getProducts:${query}`)

  let products = await localforage.getItem('products')

  if (!products) products = []

  if (query) {
    products = matchSorter(products, query, {
      keys: ['productName', 'productType'],
    })
  }

  return products.sort(sortBy('last', 'createdAt'))
}

export async function createProduct() {
  await fakeNetwork()

  const id = Math.random().toString(36).substring(2, 9)
  const product = { id, createdAt: Date.now() }
  const products = await getProducts()

  products.unshift(product)

  await set(products)

  return product
}

export async function getProduct(id) {
  await fakeNetwork(`product:${id}`)
  const products = await localforage.getItem('products')
  const product = products.find(product => product.id === id)
  return product ?? null
}

export async function updateProduct(id, updates) {
  await fakeNetwork()
  const products = await localforage.getItem('products')
  const product = products.find(product => product.id === id)

  if (!product) throw new Error('No product found for', id)

  Object.assign(product, updates)

  await set(products)

  return product
}

export async function deleteProduct(id) {
  let products = await localforage.getItem('products')
  let index = products.findIndex(product => product.id === id)

  if (index > -1) {
    products.splice(index, 1)

    await set(products)

    return true
  }
  return false
}

function set(products) {
  return localforage.setItem('products', products)
}

let fakeCache = {}

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {}
  }

  if (fakeCache[key]) {
    return
  }

  fakeCache[key] = true

  return new Promise(res => {
    setTimeout(res, Math.random() * 500)
  })
}
