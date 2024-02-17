import { Link } from 'react-router-dom'
import {
  Avatar,
  Input,
  Typography,
  Button,
  Checkbox,
} from '@material-tailwind/react'
import PubSub from 'pubsub-js'

export default function SignUp() {
  const handleSignUp = () => {
    PubSub.publish('auth.change', { isSignedUp: true })
  }

  return (
    <div className="max-w-96 mx-auto">
      <div className="mt-8 flex flex-col items-center">
        <Avatar
          variant="rounded"
          className="m-1"
          src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/signup-icon.png"
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

          <Button
            className="mt-1"
            type="submit"
            fullWidth
            onClick={handleSignUp}
          >
            Sign Up
          </Button>

          <Link className="block mt-2" to="/signin">
            Already have an account? <span className="underline">Sign in</span>
          </Link>
        </form>
      </div>
    </div>
  )
}
