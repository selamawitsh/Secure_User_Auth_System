import React from 'react'
import { useState } from 'react';
import axios from 'axios';


    function Register() {
        const [formData, setFormData] = useState(
        {   username: "", 
            email: "", 
            password: "" 
        }
    );

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function SubmitHandler(e) {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/auth/register', formData);
        } catch (error) {
            console.error('Error during registration:', error);
        }
    }

  return (
    <>
        <h1>Register Page</h1>
        <form onSubmit={SubmitHandler}>
            <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" onChange={handleInputChange} required />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handleInputChange} required />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={handleInputChange} required />
            </div>
            <button type="submit">Register</button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </form>
      
    </>
  )
}

export default Register
