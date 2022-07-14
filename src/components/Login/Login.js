import React from 'react';
import './Login.css'
import Tarjetavn from '../Tarjetavn/Tarjetavn';
import Register from '../Register/Register';
import { Link } from 'react-router-dom';


export default function login() {
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form className=''>
                <label className=''>
                    <p>E-mail</p>
                    <input type="email" />
                </label>
                <label className=''>
                    <p>Contraseña</p>
                    <input type="password" />
                </label>
                <div className='d-grid gap-2'>
                    <button type="submit" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Continuar</button>
                    <Link to="/register" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar</Link>
                </div>
            </form>
        </div>
    );
}