import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/auth'

const Login = ({ setUser, toggleAuthenticated }) => {
  let Navigate = useNavigate()
  const [formValues, setFormValues] = useState({ username: '', password: '' })
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ username: '', password: '' })
    setUser(payload)
    toggleAuthenticated(true)
    Navigate('/feed')
  }
  return (
    <div className="form">
      <div className="login-form">
        <h1>Login</h1>
        <div className="form">
          <div className="submit-form">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Username </label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="username"
                  required
                />
              </div>
              <div className="input-container">
                <label>Password </label>
                <input
                  type="password"
                  onChange={handleChange}
                  name="password"
                  required
                />
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
