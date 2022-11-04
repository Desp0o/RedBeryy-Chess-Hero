import React, { useState, UseEffect, useEffect } from 'react';
import './App.css';
// import {Route, Link, Router} from 'react-router-dom'
import FirstPage from './firstPage';
import SecondPage from './SecondPage';
import ThirdPage from './thirdPage';
import TheEnd from './TheEnd';

import {
  HashRouter as Router,
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
      <Route exact path="/ThirdPage" element={<ThirdPage />} />
      <Route exact path='/TheEnd' element={<TheEnd />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App;
