import './style.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
/* When you have problems with the import, change the name pls */

const appContainer = document.getElementById('app')
const root = createRoot(appContainer)

/* Cammel case for the component name (starts with uppercase) */

root.render(<App />)
console.log(appContainer)
