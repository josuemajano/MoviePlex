import React from 'react'

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
