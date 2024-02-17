import { Form, redirect, useLoaderData } from 'react-router-dom'
import Favorite from '../components/Favorite'
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'
import { deleteProduct, getProduct, updateProduct } from '../api/products'

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

export async function actionUpdateProduct({ request, params }) {
  const formData = await request.formData()

  return updateProduct(params.productId, {
    favorite: formData.get('favorite') === 'true',
  })
}

export async function actionDeleteProduct({ params }) {
  await deleteProduct(params.productId)

  return redirect('/')
}

export default function Product() {
  const { product } = useLoaderData()

  return (
    <Card className="mt-6 w-30">
      <CardHeader color="blue-gray" className="relative h-96">
        <img
          src={product.productImage}
          className="w-full h-full object-cover object-center"
        />

        <Favorite
          size="large"
          product={product}
          className="absolute top-4 right-4"
        ></Favorite>
      </CardHeader>

      <CardBody>
        {product.productName && (
          <Typography variant="h5" color="blue-gray">
            {product.productName}
          </Typography>
        )}
        {product.productType && (
          <Typography variant="lead" className="mb-2">
            {product.productType}
          </Typography>
        )}
        {product.productDescription && (
          <Typography>{product.productDescription}</Typography>
        )}

        <CardFooter className="flex mt-5 p-0">
          <Form action="edit" className="mr-4">
            <Button type="submit">Edit</Button>
          </Form>

          <Form
            method="post"
            action="destroy"
            onSubmit={event => {
              if (
                !confirm(
                  'Are you sure you want to delete this order? This operation is irreversible!'
                )
              ) {
                event.preventDefault()
              }
            }}
          >
            <Button type="submit" color="red">
              Delete
            </Button>
          </Form>
        </CardFooter>
      </CardBody>
    </Card>
  )
}
