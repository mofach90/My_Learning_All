import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import App from './OriginalApp.tsx'
import './index.css'
// import './OriginalIndex.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
