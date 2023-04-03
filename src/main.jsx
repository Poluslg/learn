import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Apptwo from './Apptwo'
import Appthree from './Appthree'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appthree/>
    <Apptwo/>
    <App />
  </React.StrictMode>,
)
