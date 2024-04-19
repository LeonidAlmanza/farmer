import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './css.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login.jsx'
import Home from './pages/home.jsx'
import AuthProvider from './auth/authProvider.tsx'
import ProtectedRoute from './ProtectectRoute.jsx'

const router = createBrowserRouter([
      {
        path:'/',
        element: <Login />,
      },
      {
        path:'/',
        element: <ProtectedRoute />,
        children:[
          {
            path: '/home',
            element: <Home/>,
          }],
      },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider> 
          <RouterProvider router={router}/>
      </AuthProvider>
  </React.StrictMode>,
)
