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
  Spinner,
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
      <div className="flex flex-col w-80 px-5 py-10  border-r border-gray-400">
        <div className="mb-7">
          <Form role="search" className="mb-4">
            <Input
              aria-label="Search product"
              label="Search product"
              placeholder="Search"
              type="search"
              name="query"
              defaultValue={query}
              icon={searching && <Spinner className="h-4 w-4" />}
              onChange={e => {
                const isFirstSearch = query == null

                submit(e.currentTarget.form, {
                  replace: !isFirstSearch,
                })
              }}
            />
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
        className={`flex-1 p-10 overflow-auto ${
          navigation.state === 'loading' ? 'opacity-20' : ''
        }`}
      >
        <Outlet />
      </div>
    </div>
  )
}
