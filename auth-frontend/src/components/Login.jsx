import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [formData, setFormData] = useState({
        email: '',  
        password: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:4000/api/auth/login', formData)
            localStorage.setItem('token', res.data.token)
            console.log("Login successful:", res.data)
            navigate('/dashboard')
            
        } catch (error) {
            console.error("Login failed:", error)
        }
        }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
