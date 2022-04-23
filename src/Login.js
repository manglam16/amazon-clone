import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'></img>
            </Link>
            <div className='login__container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                </form>
                <button type='submit' onClick={signIn} className='login__signInButton'>Sign-In</button>
                <p>
                    Terms and conditions wali bakchodi
                </p>
                <Link to='../Register'>
                    <button type='submit' className='login__registerButton'>Create Your Amazon Account Now</button>
                </Link>
            </div>



        </div>
    )
}

export default Login