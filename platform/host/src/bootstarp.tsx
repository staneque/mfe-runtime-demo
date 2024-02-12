import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import { mount } from 'cms/cms'

const root = document.getElementById('root') as HTMLElement
mount(root)
// ReactDOM.createRoot(root).render(
//   <React.StrictMode>
//     {/* <ThemeProvider>
//         <RouterProvider router={router} />
//       </ThemeProvider> */}
//     {/* lol÷ */}
//     <App />
//   </React.StrictMode>
// )
