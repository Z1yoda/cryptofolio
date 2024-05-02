import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CryptoProvider } from './context/CryptoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CryptoProvider>
      <App />
    </CryptoProvider>
  </BrowserRouter>,
)
