import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import {Col,Row} from 'react-bootstrap';

const endpoint = 'http://localhost:8000/api/login'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {email: email, password: password})
        navigate('/tarjetavn')
    }

    return (
        <Container>
            <div class="d-flex flex-column flex-column-fluid flex-lg-row">
                <div class="card rounded-4 w-md-550px" id='card'>
                    <div className='card-body p-10 p-lg-20'>
                        <Form onSubmit={store} >
                            <h3 className='mt-4 mb-4'>SIGN IN</h3>
                            <div>
                                <a href="#" className="btn w-50 row text-white">
                                Sign in with Google</a>
                            </div>
                            <div class="separator separator-content mt-2 mb-1">
                                <h5>Or with email</h5>
                            </div>

                            <Form.Group className='mb-2 mt-4' id='form.label'>
                                <Form.Label className='form-label' >Email</Form.Label>
                                <Form.Control 
                                    placeholder='nombre@ciudadtecnopolis.com'
                                    value={email}
                                    onChange={ (e)=> setEmail(e.target.value)}
                                    type='email'
                                    className='form-control'
                                />
                            </Form.Group >

                            <Form.Group className='mb-2 mt-3'  id='form.label'>
                                <Form.Label className='form-label'>Password</Form.Label>
                                <Form.Control 
                                    placeholder='・・・・・・・・'
                                    value={password}
                                    onChange={ (e)=> setPassword(e.target.value)}
                                    type='password'
                                    className='form-control'
                                />
                            </Form.Group>

                            <Form.Group className='mt-3'>
                                <Button variant="info" type='submit' className='btn text-white'>Continuar</Button> 
                            </Form.Group>

                            <Form.Group className='mt-4'>
                                <Row>
                                    <p class="text-gray-500 text-center fw-semibold fs-6">¿No estás registrado aún?     <Link to="/register" id="registrar">Registrar</Link></p>
                                </Row>
                            </Form.Group>
                            
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
      )
 }
 export default Login