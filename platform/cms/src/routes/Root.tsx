import React, { useEffect } from 'react'
import {
  Outlet,
  NavLink,
  useLoaderData,
  useNavigation,
  useSubmit,
  useParams,
  Form,
  redirect,
} from 'react-router-dom'
import {
  Input,
  Button,
  List,
  ListItem,
  ListItemSuffix,
} from '@material-tailwind/react'
import { getProducts, createProduct } from '../api/products'

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

export default function Root() {
  const { products, query } = useLoaderData()
  const navigation = useNavigation()
  const submit = useSubmit()
  const params = useParams()

  useEffect(() => {
    const searchInput = document.getElementById('q') as HTMLInputElement

    if (searchInput) {
      searchInput.value = query
    }
  }, [query])

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('query')

  return (
    <div className="flex h-full">
      <div
        id="sidebar"
        className="flex flex-col w-80 px-5 py-10  border-r border-gray-400"
      >
        <div className="mb-7">
          <Form id="search-form" role="search" className="mb-4">
            <Input
              id="q"
              className={`${searching ? 'loading' : ''}`}
              aria-label="Search product"
              label="Search product"
              placeholder="Search"
              type="search"
              name="query"
              defaultValue={query}
              onChange={e => {
                const isFirstSearch = query == null

                submit(e.currentTarget.form, {
                  replace: !isFirstSearch,
                })
              }}
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form method="post">
            <Button type="submit">Add product</Button>
          </Form>
        </div>

        {/* Product list */}
        {products.length ? (
          <List className="p-0 overflow-auto">
            {products.map(product => (
              <NavLink to={`products/${product.id}`} key={product.id}>
                <ListItem
                  key={product.id}
                  className="py-3 pr-4 pl-4"
                  selected={product.id === params.productId}
                >
                  {product.productName || <i>No Name</i>}

                  <ListItemSuffix>{product.favorite ? '★' : ''}</ListItemSuffix>
                </ListItem>
              </NavLink>
            ))}
          </List>
        ) : (
          <p>
            <i>No products</i>
          </p>
        )}
      </div>

      <div
        id="detail"
        className={`${
          navigation.state === 'loading' ? 'loading' : ''
        } flex-1 p-10`}
      >
        <Outlet />
      </div>
    </div>
  )
}
