import React from 'react';
import { Container } from 'react-bootstrap';
import './Tarjetavn.css';
import { Link } from 'react-router-dom';
 
export default function tarjetavn(){
    return (
        <Container>
            <div>Tarjeta Virtual de Negocios</div>
            <Link to="/" className='btn btn-success'>Log Out</Link>
            <Link to="/editar" className='btn btn-success'>Editar Perfil</Link>
        </Container>        
    );
}