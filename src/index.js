import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ImageProvider } from './ImageContext';
import reportWebVitals from './reportWebVitals';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageProvider>
      <App />
    </ImageProvider>
  </React.StrictMode>,
);

reportWebVitals();