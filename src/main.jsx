import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './router/Router'
import { UserProvider } from './Context/UserContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
  <Router/>
  </UserProvider>
  
  
)
