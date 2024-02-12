import React from 'react'
import { Form, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { Input, Textarea, Typography, Button } from '@material-tailwind/react'
import { updateProduct } from '../api/products'

export async function actionEdit({ request, params }) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  await updateProduct(params.productId, updates)

  return redirect(`/products/${params.productId}`)
}

export default function EditProduct() {
  const { product } = useLoaderData()
  const navigate = useNavigate()

  return (
    <Form
      method="post"
      id="product-form"
      className="flex w-[500px] flex-col gap-6 mx-auto"
    >
      <Typography placeholder="Edit product" variant="h4">
        Edit product
      </Typography>

      <Input
        label="Product name"
        placeholder="Do epic shit"
        aria-label="Product name"
        type="text"
        name="productName"
        defaultValue={product.productName}
      />

      <Input
        label="Product type"
        placeholder="poster"
        aria-label="product type"
        type="text"
        name="productType"
        defaultValue={product.productType}
      />

      <Input
        placeholder="https://picsum.photos/1600/600"
        label="Image address"
        aria-label="Product image"
        type="text"
        name="productImage"
        defaultValue={product.productImage}
      />

      <Textarea
        name="productDescription"
        label="Description"
        defaultValue={product.productDescription}
        rows={6}
      />

      <div className="flex">
        <Button type="submit" className="mr-4">
          Save
        </Button>

        <Button
          variant="outlined"
          type="button"
          onClick={() => {
            navigate(-1)
          }}
        >
          Cancel
        </Button>
      </div>
    </Form>
  )
}
