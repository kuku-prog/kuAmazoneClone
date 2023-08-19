import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./stateprovider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
