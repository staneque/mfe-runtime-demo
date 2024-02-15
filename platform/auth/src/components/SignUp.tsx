import React from 'react'
import { Link } from 'react-router-dom'
import {
  Avatar,
  Input,
  Typography,
  Button,
  Checkbox,
} from '@material-tailwind/react'

export default function SignUp({ onSignUp }) {
  return (
    <div className="max-w-96 mx-auto">
      <div className="mt-8 flex flex-col items-center">
        <Avatar
          placeholder="avatar"
          className="m-1"
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />

        <Typography variant="h5">Sign up</Typography>

        <form
          onSubmit={e => e.preventDefault()}
          className="mt-4 w-full"
          noValidate
        >
          <Input
            variant="outlined"
            id="name"
            name="name"
            label="Name"
            autoComplete="given-name"
            autoFocus
            required
          />

          <div className="mt-5">
            <Input
              variant="outlined"
              id="email"
              name="email"
              label="Email"
              placeholder="kirsten@dunst.me"
              autoComplete="email"
              required
            />
          </div>

          <div className="mt-5">
            <Input
              variant="outlined"
              id="password"
              name="password"
              label="Password"
              placeholder="@#$%^!*"
              autoComplete="current-password"
              required
            />
          </div>

          <div className="mt-1">
            <Checkbox defaultChecked label="I want to receive news" />
          </div>

          <Button className="mt-1" type="submit" fullWidth onClick={onSignUp}>
            Sign Up
          </Button>

          <Link className="block mt-2" to="/auth/signup">
            Already have an account? <span className="underline">Sign in</span>
          </Link>
        </form>
      </div>
    </div>
  )
}
