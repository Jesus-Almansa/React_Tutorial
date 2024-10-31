import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { App } from './App.jsx'
// import './styles.css'


const root = createRoot(document.getElementById('root'))

root.render(
  <App />
  // <div>
  //   <h1>Twitter Card</h1>
  // </div>
)