import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom'


function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const register = e => {
        e.preventDefault();
        if (password != confirmPassword) {
            alert("Passwords are different")
        } else {
            auth.createUserWithEmailAndPassword(email, password)
                .then((auth) => {
                    console.log(auth);
                    if (auth) {
                        navigate('/')
                    }
                })
                .catch(error => alert(error.message))
        }

    }
    return (
        <div className='register'>
            <Link to='/'>
                <img className='register__logo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'></img>
            </Link>
            <div className='register__container'>
                <h1>Sign-Up</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    <h5>Confirm Password</h5>
                    <input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>
                </form>
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
                <Link to =  '../Login'>
                <button className='register__loginButton'>Already have an account login</button>
                </Link>
            </div>
        </div>
    )
}

export default Register