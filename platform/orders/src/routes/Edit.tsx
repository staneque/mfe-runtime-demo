import React from 'react'
import { Form, useLoaderData, useNavigate } from 'react-router-dom'
import { Input, Textarea, Typography, Button } from '@material-tailwind/react'

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
        name="first"
        defaultValue={product.first}
      />

      <Input
        label="Product type"
        placeholder="poster"
        aria-label="product type"
        type="text"
        name="last"
        defaultValue={product.last}
      />

      <Input
        placeholder="https://example.com/avatar.jpg"
        label="Image address"
        aria-label="Product image"
        type="text"
        name="productImage"
        defaultValue={product.avatar}
      />

      <Textarea
        name="notes"
        label="Description"
        defaultValue={product.notes}
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
