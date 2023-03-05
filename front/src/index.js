import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { UseProvider } from './components/context/UseContext';
ReactDOM.render(
  <React.StrictMode>
    <UseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UseProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
