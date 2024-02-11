import React from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import Favorite from '../components/Favorite'
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'

export default function product() {
  const { product } = useLoaderData()

  return (
    <Card id="product" className="mt-6 w-30">
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
