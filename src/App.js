import React, { useState, UseEffect, useEffect } from 'react';
import './App.css';
// import {Route, Link, Router} from 'react-router-dom'
import FirstPage from './firstPage';
import SecondPage from './SecondPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";



function App(){
  return(
    <div>
      
      <Router>
      <Routes>
      <Route exact path="/" element={<FirstPage/>} />
      <Route exact path="/FirstPage" element={<FirstPage/>} />
      <Route exact path="/SecondPage" element={<SecondPage />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App;
