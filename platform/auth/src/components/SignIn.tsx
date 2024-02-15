import React from 'react'
import { Link } from 'react-router-dom'
import {
  Avatar,
  Input,
  Typography,
  Button,
  Checkbox,
} from '@material-tailwind/react'

export default function SignIn({ onSignIn }) {
  return (
    <div className="max-w-96 mx-auto">
      <div className="mt-8 flex flex-col items-center">
        <Avatar
          placeholder="avatar"
          className="m-1"
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />

        <Typography variant="h5">Sign in</Typography>

        <form
          onSubmit={e => e.preventDefault()}
          className="mt-4 w-full"
          noValidate
        >
          <Input
            variant="outlined"
            id="email"
            name="email"
            label="Email"
            autoComplete="email"
            placeholder="kirsten.dunst@email.com"
            autoFocus
            required
          />

          <div className="mt-5">
            <Input
              variant="outlined"
              id="email"
              name="password"
              label="Password"
              placeholder="@#$%^!*"
              autoComplete="current-password"
              required
            />
          </div>

          <div className="mt-1">
            <Checkbox defaultChecked label="Remember me" />
          </div>

          <Button className="mt-1" type="submit" fullWidth onClick={onSignIn}>
            Sign In
          </Button>

          <Link className="block mt-2" to="/auth/signup">
            Don't have an account? <span className="underline">Sign Up</span>
          </Link>
        </form>
      </div>
    </div>
  )
}
