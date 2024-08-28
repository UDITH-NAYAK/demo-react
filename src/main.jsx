import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import { Button } from 'flowbite-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <Button>f</Button>
  </React.StrictMode>,
)
