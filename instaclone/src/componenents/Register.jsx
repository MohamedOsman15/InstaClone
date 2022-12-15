import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/auth'

const Register = () => {
  const navigate = useNavigate()
  const initialFormValues = {
    username: '',
    displayName: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialFormValues)
  const [pass, setPass] = useState("right")

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(formValues.password === formValues.confirmPassword){
        console.log("works")
    await RegisterUser({
      displayName: formValues.displayName,
      username: formValues.username,
      password: formValues.password,
    })
    setPass('right')
    setFormValues(initialFormValues)
    navigate('/login')
  } else {
    setPass('wrong')
  }
}
  return (
  
      <div className="register-form">
        <h1>Register to create account</h1>
        <div className="form">
          <form className="register" onSubmit={handleSubmit}>
            <div className="input-container">
              <ul>
                <li>
                  <label>Username: </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={formValues.username}
                    placeholder="username"
                    name="username"
                    required
                  />
                </li>
                <li>
                  <label>Display Name: </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={formValues.displayName}
                    placeholder="Display"
                    name="displayName"
                    required
                  />
                </li>
                <li>
                  <label>Password: </label>
                  <input
                    type="password"
                    onChange={handleChange}
                    value={formValues.password}
                    placeholder="password"
                    name="password"
                    required
                  />
                </li>
                <li>
                  <label>Confirm Password: </label>
                  <input
                    type="password"
                    onChange={handleChange}
                    value={formValues.confirmPassword}
                    placeholder="password"
                    name="confirmPassword"
                    required
                  />
                </li>
                <li><p className={pass}>Passwords are not the same</p></li>
              </ul>
            </div>
            <div className="button-container">
              <ul>
                <input
                  type="submit"
                  disabled={!formValues.username || !formValues.password}
                />
              </ul>
            </div>
          </form>
        </div>
      </div>
  )
}
export default Register
