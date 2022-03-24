import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';


ReactDOM.render(
  <React.StrictMode>
    <Header />

    <Home />
    
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
