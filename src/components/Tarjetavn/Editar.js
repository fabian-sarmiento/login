import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Editar() {
  return (
    <Container>
        <div>
            <h1>Editando perfil</h1>
            <Link to="/tarjetavn" className='btn btn-success'>Guardar</Link>
        </div>
    </Container>
  )
}
