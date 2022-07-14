import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Tarjetavn from '../Tarjetavn/Tarjetavn'
import Register from '../Register/Register';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/tarjetavn' element={<Tarjetavn/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
