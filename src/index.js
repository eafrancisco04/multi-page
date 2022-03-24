import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      </BrowserRouter>
      <Home />
    
      <Footer />
    
  </React.StrictMode>,
  document.getElementById('root')
);
