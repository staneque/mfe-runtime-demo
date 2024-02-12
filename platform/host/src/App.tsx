import React from 'react'
import CMS from './components/СMS'

function App() {
  return (
    <div className="flex flex-col h-full">
      <div className="h-20 text-center flex shrink-0 justify-center items-center text-white bg-teal-200 red">
        HELLO, I'M HOST
      </div>
      <CMS />
    </div>
  )
}

export default App
