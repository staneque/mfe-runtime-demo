import { Link } from 'react-router-dom'
import {
  Avatar,
  Input,
  Typography,
  Button,
  Checkbox,
} from '@material-tailwind/react'
import PubSub from 'pubsub-js'

export default function SignIn() {
  const handleSignIn = () => {
    PubSub.publish('auth.change', { isSignedIn: true })
  }

  return (
    <div className="max-w-96 mx-auto">
      <div className="mt-8 flex flex-col items-center">
        <Avatar
          className="m-1"
          variant="rounded"
          src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/user-account-login-icon.png"
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

          <Button
            className="mt-1"
            type="submit"
            fullWidth
            onClick={handleSignIn}
          >
            Sign In
          </Button>

          <Link className="block mt-2" to="/signup">
            Don't have an account? <span className="underline">Sign Up</span>
          </Link>
        </form>
      </div>
    </div>
  )
}
