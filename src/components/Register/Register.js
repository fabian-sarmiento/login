import './Register.css';
import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/register'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_confirmation] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {name: name, email: email, password: password, password_confirmation: password_confirmation})
        navigate('/')
    }

  return (
    <div>
        <h3>Crear Usuario</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={name}
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input 
                    value={email}
                    onChange={ (e)=> setEmail(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input 
                    value={password}
                    onChange={ (e)=> setPassword(e.target.value)}
                    type='password'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password_confirmation</label>
                <input 
                    value={password_confirmation}
                    onChange={ (e)=> setPassword_confirmation(e.target.value)}
                    type='password'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Registrar</button>
        </form>
    </div>
  )
}

export default Register