import React from 'react'
import CMS from './components/СMS'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="flex flex-col h-full">
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <>
                <Header />
                <Outlet />
              </>
            }
          >
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/cms" element={<CMS />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
