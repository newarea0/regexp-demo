import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Replace from './routes/Replace'
import Validate from './routes/validate'
import Extract from './routes/extract'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'replace',
        element: <Replace />,
      },
      {
        path: 'Validate',
        element: <Validate />,
      },
      {
        path: 'Extract',
        element: <Extract />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
