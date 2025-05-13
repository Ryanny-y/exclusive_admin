import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/style.css'
import Dashboard from './view/Dashboard.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '',
        element: <Dashboard />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
