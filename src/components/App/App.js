import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Tarjetavn from '../Tarjetavn/Tarjetavn'
import Register from '../Register/Register';
import Editar from '../Tarjetavn/Editar'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  return (
    <container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/tarjetavn' element={<Tarjetavn/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/editar' element={<Editar/>}></Route>
        </Routes>
      </BrowserRouter>
    </container>
  );
}
