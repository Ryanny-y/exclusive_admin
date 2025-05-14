import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/style.css'
import Dashboard from './view/Dashboard.jsx'
import Products from './view/Products.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App.jsx';
import AuthProvider from './context/AuthContext.jsx';
import Login from './view/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '',
        element: <Dashboard />
      }, {
        path: 'products',
        element: <Products />
      }
    ]
  }, {
    path: '/login',
    element: <Login />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
