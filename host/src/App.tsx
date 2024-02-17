import React, { lazy, Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import { browserRouter } from './router'

function App() {
  return (
    <div className="flex flex-col h-full">
      <RouterProvider router={browserRouter} />
    </div>
  )
}

export default App
