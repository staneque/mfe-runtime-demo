import {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from './products'
import { redirect } from 'react-router-dom'

export async function loaderRoot({ request }) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query')
  const products = await getProducts(query)

  return { products, query }
}

export async function actionCreateProduct() {
  const product = await createProduct()

  return redirect(`/products/${product.id}/edit`)
}

export async function actionEdit({ request, params }) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  await updateProduct(params.productId, updates)

  return redirect(`/products/${params.productId}`)
}

export async function loaderProduct({ params }) {
  const product = await getProduct(params.productId)

  if (!product) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    })
  }

  return { product }
}

export async function actionDeleteProduct({ params }) {
  await deleteProduct(params.productId)

  return redirect('/')
}

export async function actionUpdateProduct({ request, params }) {
  const formData = await request.formData()

  return updateProduct(params.productId, {
    favorite: formData.get('favorite') === 'true',
  })
}
