import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
            <div>
                <h3>Sign In</h3>
                <Form onSubmit={store}>

                    <Form.Group  className='mb-2 mt-2'>
                        <Form.Label className='form-label'>Email</Form.Label>
                        <Form.Control 
                            value={email}
                            onChange={ (e)=> setEmail(e.target.value)}
                            type='email'
                            className='form-control'
                        />
                    </Form.Group >

                    <Form.Group className='mb-2 mt-2'>
                        <Form.Label className='form-label'>Password</Form.Label>
                        <Form.Control 
                            value={password}
                            onChange={ (e)=> setPassword(e.target.value)}
                            type='password'
                            className='form-control'
                        />
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type='submit' className='btn btn-primary'>Login</Button>  
                        <Link to="/register" className='btn btn-success'>Registrar</Link>
                    </Form.Group>
                    
                </Form>
            </div>
        </Container>
      )
 }
 export default Login