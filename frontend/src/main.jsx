import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    {/* <Home />
    <Navbar /> */}
  </BrowserRouter>,
);